// Import required parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the sequelize connection from config.js
const sequelize = require('../config/connection');

// Import the Product and Tag models
const Product = require('./Product');
const Tag = require('./Tag');

// Define the ProductTag class
class ProductTag extends Model { }

// Initialize the ProductTag model
ProductTag.init(
  {
    // Define columns for the ProductTag model
    id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      allowNull: false, // Column cannot be null
      primaryKey: true, // Column serves as the primary key
      autoIncrement: true, // Auto-increment the column value
    },
    product_id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      references: {
        model: 'product', // References the 'product' table
        key: 'id' // Uses the 'id' column of the referenced table
      }
    },
    tag_id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      references: {
        model: 'tag', // References the 'tag' table
        key: 'id' // Uses the 'id' column of the referenced table
      }
    }
  },
  {
    // Configure the ProductTag model
    sequelize, // Use the established database connection
    timestamps: false, // Do not include timestamp columns 
    freezeTableName: true, // Use the model name for the table name
    underscored: true, // Use snake_case for table and column names
    modelName: 'product_tag', // Use 'product_tag' as the model name in Sequelize
  }
);

// Export ProductTag model
module.exports = ProductTag;