const express = require('express');
const router = express.Router();

// POST route for user registration
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // Here you would add the user to your database
  res.status(200).json({ message: 'User registered successfully!' });
});

module.exports = router;

