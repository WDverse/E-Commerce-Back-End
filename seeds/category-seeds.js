// Import the Category model from the models folder
const { Category } = require('../models');

// Array of category data to be inserted into the database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to seed the category data into the database
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function
module.exports = seedCategories;
