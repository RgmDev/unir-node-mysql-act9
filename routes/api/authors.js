var express = require('express');
var router = express.Router();

const { getAll, getById, create, updateById, deleteById } = require('../../models/author.model');
const { getChangesForUpdate } = require('../../helpers/utils');

/* GET authors listing. */
router.get('/', async (req, res, next) => {
  try {
    const authors = await getAll();
    res.json(authors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* GET author info. */
router.get('/:authorId', async (req, res, next) => {
  try {
    const { authorId } = req.params;
    const author = await getById(parseInt(authorId));
    console.log(author)
    if(author) {
      res.json(author);
    } else {
      res.status(400).json({ error: "authorId doesn't exist" });
    }
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

/* POST create author. */
router.post('/', async (req, res) => {
  try {
    const result = await create(req.body);
    const author = await getById(result.insertId);
    res.json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* PUT update author. */
router.put('/:authorId', async (req, res) => {
  try {
    const { authorId } = req.params;
    let changes = getChangesForUpdate(req.body, ['name', 'email', 'image']);
    if (changes.length === 0) {
      res.status(400).json({ error: "No changes detected" });
    } 
    const result = await updateById(authorId, changes);
    const authorUpdated = await getById(authorId);
    if (authorUpdated) {
      res.json(authorUpdated);
    } else {
      res.status(400).json({ error: "authorId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* DELETE delete author. */
router.delete('/:authorId', async (req, res) => {
  try {
    const { authorId } = req.params;
    const authorDeleted = await getById(authorId);
    if (authorDeleted) {
      const result = await deleteById(authorId);
      res.json(authorDeleted);
    } else {
      res.status(400).json({ error: "authorId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;