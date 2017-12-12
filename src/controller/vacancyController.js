//Dependencies
let VacancyModel = require('./../model/vacancy');

//Default controller
exports.vacancy_default = function(req, res) {    
    VacancyModel.defaultGetApi().then((output)=> {
        //res.send(JSON.stringify(output));
        return res.json(output);
    }).catch((error)=> {
        //res.send(JSON.stringify(error));
        return res.json(error);
    });
};

//Test GET
exports.vacancy_test = function(req, res) {
    //res.send('This is test function');
    VacancyModel.testGetApi().then((output)=>{
        return res.json(output);
    }).catch((error)=>{
        return res.json(error);
    });
};

//Display list of vacancies available
exports.vacancy_listAll = function(req, res) {
    //res.send('Vacancy List function');
    var dept = req.body.result && req.body.result.parameters && req.body.result.parameters.department ? req.body.result.parameters.department : '';
    var pos = req.body.result && req.body.result.parameters && req.body.result.parameters.positions ? req.body.result.parameters.positions : '';
    
    VacancyModel.listAllAPi(dept, pos).then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(error);
    });
};

//Vacancy Search
exports.vacancy_search = function(req, res) {
    //res.send('Vacancy Search function');
    var dept = req.body.result && req.body.result.parameters && req.body.result.parameters.department ? req.body.result.parameters.department : '';
    var pos = req.body.result && req.body.result.parameters && req.body.result.parameters.positions ? req.body.result.parameters.positions : '';
    
    VacancyModel.searchAPi(dept, pos).then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(error);
    });
};
//Create vacancy
exports.vacancy_create = function(req, res) {
    //res.send('Vacancy Create function');
    let dept = req.body.result && req.body.result.parameters && req.body.result.parameters.department ? req.body.result.parameters.department : '';
    let pos = req.body.result && req.body.result.parameters && req.body.result.parameters.positions ? req.body.result.parameters.positions : '';
    let jobid = req.body.result && req.body.result.parameters && req.body.result.parameters.jobid ? req.body.result.parameters.jobid : '';
    let vacantPos = req.body.result && req.body.result.parameters.vacantPositions ? req.body.result.parameters.vacantPositions : '';

    VacancyModel.createApi(jobid, dept, vacantPos, pos).then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(error);
    });
};
//Vacancy details
exports.vacancy_detail = function(req, res) {
    res.send('Vacancy Detail function');
};
//Update vacancy
exports.vacancy_update = function(req, res) {
    res.send('Vacancy Update function');
};
//Delete vacancy
exports.vacancy_delete = function(req, res) {
    res.send('Vacancy Delete function');
};

exports.get_fbhook = function(req, res) {
    VacancyModel.getFbHookApi(req).then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(error);
    })
};