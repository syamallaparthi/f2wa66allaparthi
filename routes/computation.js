var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var val = Math.floor(Math.random() * 10);
    res.render('computation', { title: 'Syam Allaparthi generate\'s a random value and apply a Math function', math_result:`Math.exp()  applied to ${val} is ${Math.exp(val)}`});
});

module.exports = router;