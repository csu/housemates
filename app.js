/*
    Module dependencies
*/

var express = require('express'),       // the main ssjs framework
    path = require('path'),             // for path manipulation
    mongoose = require('mongoose'),
    app = express();                    // create an express app

var db = require('./db');
var routes = require('./routes');       // by default, brings in routes/index.js

/*
    Configure environments
*/

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/*
    URL routes
*/

app.get('/', function(req, res) {
    res.sendfile('index.html');
});
app.get('/addProperty', function(req, res) {
    res.sendfile('addProperty.html');
});
app.get('/get/properties/', routes.getAll);
app.post('/add/property', routes.addProperty);

app.listen(app.get('port'));
console.log('Express server listening on port ' + app.get('port'));
