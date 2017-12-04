//Dependecies
let express = require('express');
let router = express.Router();

//Controller module import
let vacancy_controller = require('./../controller/vacancyController');
let error_controller = require('./../controller/errorController');

//Vacancy Routes
/* Default response */
router.get('/', vacancy_controller.vacancy_default);

/* Test GET */
router.get('/test', vacancy_controller.vacancy_test);

//Redirect
router.post('/', function(req, res){
    let action = req.body.result && req.body.result.action ? req.body.result.action : 'default';

    //console.log('Action = ' + action);
    switch(action) {
        case 'list_all_vacancy': vacancy_controller.vacancy_listAll(req, res);
        break;
        case 'search_vacancy': vacancy_controller.vacancy_search(req, res);
        break;
        case 'create_vacancy': vacancy_controller.vacancy_create(req,res);
        break;
        case 'default':
            error_controller.handle_error(req, res);
        break;
        default: error_controller.handle_error(req, res);
        break;
    }
});

/* POST request for List all vacancy */
router.post('/list_all_vacancy', vacancy_controller.vacancy_listAll);

/* POST request for Deleting exhisting vacancy */
router.post('/search_vacancy', vacancy_controller.vacancy_search);

/* POST request for creating new vacancy */
router.post('/create_vacancy', vacancy_controller.vacancy_create);

/* POST request for Updating exhisting vacancy */
router.post('/update_vacancy', vacancy_controller.vacancy_create);

/* POST request for Deleting exhisting vacancy */
router.post('/delete_vacancy', vacancy_controller.vacancy_create);

/* POST request for getting vacancy details */
router.post('/detail_vacancy', vacancy_controller.vacancy_detail);

//Export the module
module.exports = router;