// Import the router module
const router = require('express').Router();

// Import the routes for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the imported routes for specific endpoints
router.use('/categories', categoryRoutes); // For routes related to categories
router.use('/products', productRoutes);     // For routes related to products
router.use('/tags', tagRoutes);             // For routes related to tags

// Export the router
module.exports = router;