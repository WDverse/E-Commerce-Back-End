// Import required parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the sequelize database connection from config.js
const sequelize = require('../config/connection.js');

// Define the Tag model 
class Tag extends Model { }

// Initialize the Tag model
Tag.init(
  {
    // Define columns for the Tag model
    id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      allowNull: false, // Column cannot be null
      primaryKey: true, // Column serves as the primary key
      autoIncrement: true, // Auto-increment the column value
    },
    tag_name: {
      type: DataTypes.STRING // Data type for the column is STRING 
    }
  },
  {
    // Configure the Tag model
    sequelize, // Use the established database connection
    timestamps: false, // Do not include timestamp columns
    freezeTableName: true, // Use the model name as-is for the table name
    underscored: true, // Use snake_case for table and column names
    modelName: 'tag', // Use 'tag' as the model name in Sequelize
  }
);

// Export Tag model
module.exports = Tag;