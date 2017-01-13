/**
 * Server created using Node
 */
// //import http module
// var http = require('http');
//
// //Hendal request and responce
// function handleRequests(req,res){
// 	//return string
// 	res.end('Hello World');
// }
//
// //create server
// var server = http.createServer(handleRequests);
//
//
// //start server and listen on port x
// server.listen(8080,function() {
// 	console.log('Listning on port 8080')
//
// })



/**
 * Server created using Expres
 */
 var express = require('express');
 var app = express();
 var port = 8080;


//start the server
app.listen(port,function() {
	console.log('app started');
});

//route for home page
app.get('/',function(req, res){
	res.send('Are you accepting changies.....');
});

//route for about page

app.get('/about',function(req, res){
	res.send('Hello from about page');
});

app.get('/contact');
app.post('/contact');
