var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N予備校マジリク一覧' });
});

module.exports = router;
