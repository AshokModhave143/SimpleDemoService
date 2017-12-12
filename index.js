// Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Express
const app = express();
var PORT = process.env.PORT || 3000;
//app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Module imports
var defaultredirect = require('./src/routes/redirect');
var vacancyRoute = require('./src/routes/vacancy_route');
var errorRoute = require('./src/routes/errorRoute');
//var sfRoute = require('./src/routes/sfRoute');

//Routes
app.use('/', defaultredirect);
app.use('/vacancy', vacancyRoute);
//app.use('/sf', sfRoute);
app.use('/error', errorRoute);

// Start server
app.listen(PORT, function() {
    console.log('API is running on port ' + PORT);
});