//Dependencies
var Vacancy = require('./../model/vacancy');

//Default controller
exports.vacancy_default_get = function(req, res) {
    Vacancy.defaultGetApi().then((output)=> {
        //res.send(JSON.stringify(output));
        return res.json(output);
    }).catch((error)=> {
        //res.send(JSON.stringify(error));
        return res.json(output);
    });
};

//Test GET
exports.vacancy_test_get = function(req, res) {
    //res.send('This is test function');
    Vacancy.testGetApi().then((output)=>{
        return res.json(output);
    }).catch((error)=>{
        return res.json(output);
    });
};

//Display list of vacancies available
exports.vacancy_list_post = function(req, res) {
    //res.send('Vacancy List function');
    Vacancy.listAllPostAPi().then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(output);
    });
};

//Vacancy details
exports.vacancy_detail_post = function(req, res) {
    res.send('Vacancy Detail function');
};

//Vacancy Search
exports.vacancy_search_post = function(req, res) {
    res.send('Vacancy Search function');
};

//Create vacancy
exports.vacancy_create_post = function(req, res) {
    res.send('Vacancy Create function');
};
//Update vacancy
exports.vacancy_update_post = function(req, res) {
    res.send('Vacancy Update function');
};
//Delete vacancy
exports.vacancy_delete_post = function(req, res) {
    res.send('Vacancy Delete function');
};