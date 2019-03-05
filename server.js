/// Required NPM Packages
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//initialize Express app
var express = require('express');
var app = express();

// Public Settings
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

// Database
require("./config/connection");

// Use morgan logging
app.use(logger("dev"));

// BodyParser Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Set up Handlebar for views
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Routes
var routes = require('./controller/controller.js');
app.use('/',routes);

//404 Error
app.use(function(req, res) {
	res.render('404');
});

//Port
app.listen(port, function() {
    console.log("Listening on port:" + port);
});