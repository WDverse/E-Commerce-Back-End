// Import the router 
const router = require('express').Router();

// Import the API routes module
const apiRoutes = require('./api');

// Use the imported API routes module for the '/api' endpoint
router.use('/api', apiRoutes);

// Define a catch-all route for any requests that don't match the previous routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>"); // Respond with an error message
});

// Export router 
module.exports = router;
