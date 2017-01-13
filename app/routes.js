//require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

//export router
module.exports = router;

//route for home page
router.get('/',function(req, res){
	res.render('pages/index');
});

//route for about page

router.get('/about',function(req, res){
	var users = [
    { name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/800/800'},
    { name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/1000/1000'},
    { name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/600/600'},
    { name: 'Samantha', email: 'Samantha@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ];
	res.render('pages/about',{users: users});
});

router.get('/contact', function(req, res){
	res.render('pages/contact');
});
router.post('/contact', function(req, res) {
	//
});
