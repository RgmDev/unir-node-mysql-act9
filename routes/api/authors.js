var express = require('express');
var router = express.Router();

/* GET authors listing. */
router.get('/', function(req, res, next) {
  res.send('GET authors');
});

/* GET author info. */
router.get('/:authorId', function(req, res, next) {
  res.send('GET author');
});

/* POST create author. */
router.post('/', function(req, res, next) {
  res.send('POST author');
});

/* PUT update author. */
router.put('/:authorId', function(req, res, next) {
  res.send('PUT author');
});

/* DELETE delete author. */
router.delete('/:authorId', function(req, res, next) {
  res.send('DELETE author');
});

module.exports = router;