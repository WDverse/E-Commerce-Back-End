// Load environment variables
require('dotenv').config();

// Import the Sequelize library
const Sequelize = require('sequelize');

// Initialize Sequelize instance based on environment variables
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JAWSDB_URL if it exists
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Database host
    dialect: 'mysql', // Using MySQL dialect
    dialectOptions: {
      decimalNumbers: true, // Enable support for decimal numbers
    },
  });

// Export the configured Sequelize instance
module.exports = sequelize;