// Import Express
const express = require('express');

// Import the routes
const routes = require('./routes');

// Import sequelize connection
const sequelize = require('./config/connection');

// Create an instance of the Express application
const app = express();

// Define listening port for the server 
const PORT = process.env.PORT || 3001;

// Configure the application to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the imported routes module for routing
app.use(routes);

// Sync sequelize models to the database, then start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
