var express = require('express');
var router = express.Router();

const { getAll, getById, create, updateById, deleteById } = require('../../models/category.model');

/* GET categories listing. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await getAll();
    res.json(categories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* GET category info. */
router.get('/:categoryId', async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const category = await getById(parseInt(categoryId));
    if(category) {
      res.json(category);
    } else {
      res.status(400).json({ error: "categoryId doesn't exist" });
    }
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

/* POST create category. */
router.post('/', async (req, res) => {
  try {
    const result = await create(req.body);
    const category = await getById(result.insertId);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* PUT update category. */
router.put('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { description } = req.body;
    const result = await updateById(categoryId, description);
    const categoryUpdated = await getById(categoryId);
    if (categoryUpdated) {
      res.json(categoryUpdated);
    } else {
      res.status(400).json({ error: "categoryId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* DELETE delete category. */
router.delete('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await getById(categoryId);
    if (category) {
      const result = await deleteById(categoryId);
      res.json(category);
    } else {
      res.status(400).json({ error: "categoryId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;