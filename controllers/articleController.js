const Article = require('../models/Article');

// Get All Articles
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};

// Add New Article
exports.addArticle = async (req, res) => {
  try {
    const { heading, description, date, coverImage } = req.body;
    const article = new Article({ heading, description, date, coverImage });
    await article.save();
    res.status(201).send(article);
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};

// Update Article
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) return res.status(404).send({ message: 'Article not found' });
    res.send(article);
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};

// Delete Article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) return res.status(404).send({ message: 'Article not found' });
    res.send({ message: 'Article deleted' });
  } catch (err) {
    res.status(500).send({ message: 'Server error', error: err.message });
  }
};
