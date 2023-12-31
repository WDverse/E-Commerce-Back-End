const router = require('express').Router(); //Import router
const { Tag, Product, ProductTag } = require('../../models'); //Import Tag, Product and ProductTag models

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // Find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    // Handle scenario for when id does not exist
    if (!tagData) {
      res.status(404).json({ message: 'No tag with that id found!' });
      return;
    };
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // Create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(201).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // Handle scenario for when id does not exist
    if (!tagData) {
      res.status(404).json({ message: 'No tag with that id found!' });
      return;
    };
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // Delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    // Handle scenario for when id does not exist
    if (!tagData) {
      res.status(404).json({ message: 'No tag with that id found!' });
      return;
    };
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;