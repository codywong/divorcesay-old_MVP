var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/asdf', function(req, res) {
	console.log("post received:");
	console.log(req.body);
	res.render('index', {title: 'Express'});
	});

module.exports = router;
