const express = require('express');
const { getExecutives, addExecutive, updateExecutive, deleteExecutive } = require('../controllers/executiveController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Executive Routes
router.get('/', getExecutives);
router.post('/', isAuthenticated, isAdmin, addExecutive);
router.put('/:id', isAuthenticated, isAdmin, updateExecutive);
router.delete('/:id', isAuthenticated, isAdmin, deleteExecutive);

module.exports = router;
