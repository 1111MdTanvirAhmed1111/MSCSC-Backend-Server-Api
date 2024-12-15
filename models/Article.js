const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  coverImage: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
