var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/show', function(req, res) {
  res.render('users', { title: "ellen's title worked!" });
});

module.exports = router;
