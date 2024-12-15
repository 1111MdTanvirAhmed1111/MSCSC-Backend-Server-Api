const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { registerSchema } = require('../utils/validation');

// Register User
exports.register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: 'User already exists' });

    user = new User({ name, email, password });
    await user.save();

    res.status(201).send({ message: 'User registered. Please verify your email.' });
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ message: 'Invalid credentials' });

    if (!user.isVerified) return res.status(401).send({ message: 'Please verify your email' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};
