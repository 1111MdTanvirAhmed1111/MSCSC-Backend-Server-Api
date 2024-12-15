const express = require('express');
const { getEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Event Routes
router.get('/', getEvents);
router.post('/', isAuthenticated, isAdmin, addEvent);
router.put('/:id', isAuthenticated, isAdmin, updateEvent);
router.delete('/:id', isAuthenticated, isAdmin, deleteEvent);

module.exports = router;
