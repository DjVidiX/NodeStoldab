// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose');					// mongoose for mongodb
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var database = require('./config/database');

// configuration ===============================================================

mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(bodyParser());
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users

// pull information from html in POST
//app.configure(function() {
//    app.use(express.logger('dev')); 						// log every request to the console
//    app.use(express.methodOverride()); 						// simulate DELETE and PUT
//});

require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
