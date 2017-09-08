var express = require('express'),
    http    = require('http'),
	fs      = require('fs');    

var app = express();
var port = 4000;
var server = app.listen(port);


//For static asset files
['css', 'img', 'js', 'views', 'api', 'msg'].forEach(function (dir){
    app.use('/'+dir, express.static(__dirname+'/environment/'+dir));
});


app.get('/', function(req, res) {
	res.sendFile(__dirname+'/environment/index.html');
});




console.log("Express server listening on port ",port);