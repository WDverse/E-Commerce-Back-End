// Import necessary modules from Sequelize
const { Model, DataTypes } = require('sequelize');

// Import Sequelize connection
const sequelize = require('../config/connection.js');

// Define the Category class
class Category extends Model { }

// Initialize the Category model 
Category.init(
  {
    // Define columns for the Category model
    id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      allowNull: false, // Column cannot be null
      primaryKey: true, // Column serves as the primary key
      autoIncrement: true, // Auto-increment the column value
    },
    category_name: {
      type: DataTypes.STRING, // Data type for the column is STRING
      allowNull: false, // Column cannot be null
    }
  },
  {
    // Configure the Category model
    sequelize, // Use the Sequelize connection
    timestamps: false, // Do not include timestamp columns (
    freezeTableName: true, // Use the model name for the table name
    underscored: true, // Use snake_case for table and column names
    modelName: 'category', // Use 'category' as the model name in Sequelize
  }
);

// Export Category model
module.exports = Category;