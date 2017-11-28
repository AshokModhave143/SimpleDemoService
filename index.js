
// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var morgan = require('morgan');
//var restful = require('node-restful');
//var mongoose = restful.mongoose;

//Data respository
var data = require('./dataInput/datafile.json');

// Express
const app = express();
var PORT = process.env.PORT || 3000;
//app.use(morgan('dev'));
app.use(express.static(__dirname));
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
app.get('/api', function(req, res){
    var result = 'This is get request';
    return res.json({
        speech: result,
        displayText: result,
        source: 'simpledemoservice'
    });
});
app.post('/api/checkVacancy',function(req, res){
    var dept = req.body.result && req.body.result.parameters && req.body.result.parameters.department ? req.body.result.parameters.department : "Deparment parameter missing";
    var pos = req.body.result && req.body.result.parameters && req.body.result.parameters.positions ? req.body.result.parameters.positions : "Position parameter missing";
    var result = '';
    for(var i in data.vacancylist) {
        if(data.vacancylist[i].department == dept && data.vacancylist[i].position == pos) {
            result = 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available for ' + data.vacancylist[i].positions + ' role in ' + data.vacancylist[i].department + '.';
        }
    }
    if(result.length == 0) {
        result = 'Sorry. There are no vacancy available for ' + pos + ' in ' + dept;
    }
    
    //console.log(req);    
    return res.json({
        speech: result,
        displayText: result,
        source: 'simpledemoservice'
    });
});
app.post('/api/saveVacancy',function(req, res){
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.department ? req.body.result.parameters.department : "There are no parameters";
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'simpledemoservice'
    });
});

// Start server
app.listen(PORT, function() {
    console.log('API is running on port ' + PORT);
});