//require express
var express = require('express');

//create our router object
var router = express.Router();

//export router
module.exports = router;

//route for home page
router.get('/',function(req, res){
	res.send('Are you accepting changies.....');
});

//route for about page

router.get('/about',function(req, res){
	res.send('Hello from about page');
});

router.get('/contact');
router.post('/contact');
