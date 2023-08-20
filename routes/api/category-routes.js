const router = require('express').Router(); //Import router
const { Category, Product } = require('../../models'); //Import Category and Product models

// The `/api/categories` endpoint

// Find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }], // Include associated Products
    });
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Find a category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }], // Include associated Products
    });
    // Handle scenario for when id does not exist
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    };
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err)
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(201).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // Handle scenario for when id does not exist
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    };
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    // Handle scenario for when id does not exist
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    };
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

//Export router
module.exports = router;