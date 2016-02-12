// import express library
var express = require('express');
// require body parser
var bodyParser = require('body-parser');
// require method-override
var methodOverride = require('method-override');
// require router file
var router = require('./controllers/routes');

// create express app
var app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

var server = app.listen(process.env.PORT || 3000, function () {
var port = server.address().port;
  console.log('Server up and listening on', port);
});
