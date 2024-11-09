const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/users'); // Make sure the path is correct

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

// Use the user routes for paths starting with '/api/users'
app.use('/api/users', userRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
