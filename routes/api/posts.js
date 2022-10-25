var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.send('GET posts');
});

/* GET post info. */
router.get('/:postId', function(req, res, next) {
  res.send('GET post');
});

/* GET posts by author. */
router.get('/author/:authorId', function(req, res, next) {
  res.send('GET posts by author');
});

/* POST create post. */
router.post('/', function(req, res, next) {
  res.send('POST posts');
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