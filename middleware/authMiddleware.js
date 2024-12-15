const jwt = require('jsonwebtoken');

// Verify if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid Token' });
  }
};

// Verify if user is admin
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send({ message: 'Access Denied' });
  next();
};
