var express = require('express');
var router = express.Router();

const { getByPage, getById, getByAuthorId, create, deleteById } = require('../../models/post.model');

/*
  TODO: 
    - agregar la informacion del autor en los GETs
    - Validacion del autor en getByAuthorId
*/

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

    // Existe el autor??

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
    const result = await create(req.body);
    const cliente = await getById(result.insertId);
    res.json(cliente);
} catch (error) {
    res.json({ fatal: error.message });
}
});

/* PUT update post. */
router.put('/:postId', function(req, res, next) {
  res.send('PUT posts');
});

/* DELETE delete post. */
router.delete('/:postId', function(req, res, next) {
  res.send('DELETE post');
});

module.exports = router;