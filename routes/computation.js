var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var val = Math.floor(Math.random() * 10);
    res.render('computation', { title: 'Syam Allaparthi generate\'s a random value and apply a Math function', 
    math_result:`Math.exp()  applied to ${val} is ${Math.exp(val)}`,
    math_results:`Math.expm1()  applied to ${val} is ${Math.expm1(val)}`,
    math_resultss:`Math.atan()  applied to ${val} is ${Math.atan(val)}`    

    });
});

module.exports = router;