
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var morgan = require('morgan');
//var restful = require('node-restful');
//var mongoose = restful.mongoose;

// Express
var app = express();
//app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
//app.use(methodOverride());

//mongoose.connect("mongodb://localhost/api");

// Routes
//app.use('/api', require('./src/api'));
// var Resource = app.resource = restful.model('vacancies', mongoose.Schema({
//     title: String,
//     year: Number
// })).methods(['get','put','post']);

// Resource.register(app, '/api');

app.get('/api/vacancies',function(req, res){
    var str = "very good afternoon sir, how may i help you ?"
    res.send(str);
});

// Start server
app.listen(3000);
console.log('API is running on port 3000...');