const express = require('express');
const { getArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articleController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Article Routes
router.get('/', getArticles);
router.post('/', isAuthenticated, isAdmin, addArticle);
router.put('/:id', isAuthenticated, isAdmin, updateArticle);
router.delete('/:id', isAuthenticated, isAdmin, deleteArticle);

module.exports = router;
