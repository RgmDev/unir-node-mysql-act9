var express = require('express');
var router = express.Router();

const { getByPage, getById, getByAuthorId, create, updateById, deleteById } = require('../../models/post.model');
const { getById: authorById } = require('../../models/author.model');
const { getById: categoryById } = require('../../models/category.model');
const { getChangesForUpdate } = require('../../helpers/utils');

/* GET posts listing. */
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const posts = await getByPage(parseInt(page), parseInt(limit));
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* GET post info. */
router.get('/:postId', async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await getById(parseInt(postId));
    if(post) {
      res.json(post);
    } else {
      res.status(400).json({ error: "postId doesn't exist" });
    }
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

/* GET posts by author. */
router.get('/author/:authorId', async (req, res, next) => {
  try {
    const { authorId } = req.params;
    // Validate authors_id
    const author = await authorById(authorId);
    if (!author) {
      res.status(400).json({ error: "authors_id doesn't exist" });
      return;
    }
    // Get posts by author
    const posts = await getByAuthorId(parseInt(authorId));
    if(posts) {
      res.json(posts);
    } else {
      res.status(400).json({ error: 'There is no posts for author id: ' + authorId});
    }
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

/* POST create post. */
router.post('/', async (req, res, next) => {
  try {
    // Validate authors_id
    const author = await authorById(req.body.authors_id);
    if (!author) {
      res.status(400).json({ error: "authors_id doesn't exist" });
      return;
    }
    // Validate categories_id
    const category = await categoryById(req.body.categories_id);
    if (!category) {
      res.status(400).json({ error: "categories_id doesn't exist" });
      return;
    }
    // Create post
    const result = await create(req.body);
    const post = await getById(result.insertId);
    res.json(post);
  } catch (err) {
      res.json({ error: err.message });
  }
});

/* PUT update post. */
router.put('/:postId', async (req, res, next) => {
  try {
    const { postId } = req.params;
    // Get validate changes 
    let changes = getChangesForUpdate(req.body, ['title', 'description', 'post_date', 'authors_id', 'categories_id']);
    if (changes.length === 0) {
      res.status(400).json({ error: "No changes detected" });
      return;
    }
    // Validate authors_id 
    if (req.body.authors_id !== undefined) {
      const author = await authorById(req.body.authors_id);
      if (!author) {
        res.status(400).json({ error: "authors_id doesn't exist" });
        return;
      }
    }
    // Validate categories_id
    if (req.body.categories_id !== undefined) {
      const category = await categoryById(req.body.categories_id);
      if (!category) {
        res.status(400).json({ error: "categories_id doesn't exist" });
        return;
      }
    }
    // Update post
    const result = await updateById(postId, changes);
    const postUpdated = await getById(postId);
    if (postUpdated) {
      res.json(postUpdated);
    } else {
      res.status(400).json({ error: "postId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* DELETE delete post. */
router.delete('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const postDeleted = await getById(postId);
    if (postDeleted) {
      const result = await deleteById(postId);
      res.json(postDeleted);
    } else {
      res.status(400).json({ error: "postId doesn't exist" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;