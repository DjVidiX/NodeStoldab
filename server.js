// set up ======================================================================
var express  = require('express'),
	app      = express(),
	mongoose = require('mongoose'),
	passport = require('passport'),
	flash = require('connect-flash'),

	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	session = require('express-session'),

	database = require('./config/database'),

	port = process.env.PORT || 3000;

// configuration ===============================================================

mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({secret: "JestemSobieWesolyRomek"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users

// pull information from html in POST
//app.configure(function() {
//    app.use(express.logger('dev')); 						// log every request to the console
//    app.use(express.methodOverride()); 						// simulate DELETE and PUT
//});

require('./app/routes.js')(app, passport);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
