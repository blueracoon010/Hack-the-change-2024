const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile } = require('../controllers/userController');
const verifyIdToken = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', registerUser);

// Get user profile (requires authentication)
router.get('/profile', verifyIdToken, getUserProfile);

module.exports = router;

