// Import required parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import sequelize connection 
const sequelize = require('../config/connection');

// Import the DECIMAL data type from Sequelize
const { DECIMAL } = require('sequelize');

// Import the Category model
const Category = require('./Category');

// Define the Product model
class Product extends Model { }

// Initialize the Product model 
Product.init(
  {
    // Define columns for the Product model
    id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      allowNull: false, // Column cannot be null
      primaryKey: true, // Column serves as the primary key
      autoIncrement: true, // Auto-increment the column value
    },
    product_name: {
      type: DataTypes.STRING, // Data type for the column is STRING 
      allowNull: false, // Column cannot be null
    },
    price: {
      type: DataTypes.DECIMAL, // Data type for the column is DECIMAL 
      allowNull: false, // Column cannot be null
      validate: {
        isDecimal: true, // Validation rule to ensure the value is a valid decimal number
      }
    },
    stock: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      allowNull: false, // Column cannot be null
      defaultValue: 10, // Default value for the column is 10
      validate: {
        isNumeric: true, // Validation rule to ensure the value is a valid numeric value
      }
    },
    category_id: {
      type: DataTypes.INTEGER, // Data type for the column is INTEGER
      references: {
        model: 'category', // References the 'category' table
        key: 'id' // Uses the 'id' column of the referenced table
      }
    }
  },
  {
    // Configure the Product model
    sequelize, // Use the established database connection
    timestamps: false, // Do not include timestamp columns 
    freezeTableName: true, // Use the model name for the table name
    underscored: true, // Use snake_case for table and column names
    modelName: 'product', // Use 'product' as the model name in Sequelize
  }
);

// Export Product model
module.exports = Product;