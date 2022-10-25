var express = require('express');
var router = express.Router();

/* GET categories listing. */
router.get('/', function(req, res, next) {
  res.send('GET authors');
});

/* GET category info. */
router.get('/:categoryId', function(req, res, next) {
  res.send('GET author');
});

/* POST create category. */
router.post('/', function(req, res, next) {
  res.send('POST author');
});

/* PUT update category. */
router.put('/:categoryId', function(req, res, next) {
  res.send('PUT author');
});

/* DELETE delete category. */
router.delete('/:categoryId', function(req, res, next) {
  res.send('DELETE author');
});

module.exports = router;