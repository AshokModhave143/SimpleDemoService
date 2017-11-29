//Dependecies
let express = require('express');
let router = express.Router();

//Controller module import
let vacancy_controller = require('./../controller/vacancyController');

//Vacancy Routes
/* Default response */
router.get('/', vacancy_controller.vacancy_default_get);

/* Test GET */
router.get('/test', vacancy_controller.vacancy_test_get);

/* POST request for List all vacancy */
router.post('/list_all_vacancy', vacancy_controller.vacancy_list_post);

/* POST request for creating new vacancy */
router.post('/create', vacancy_controller.vacancy_create_post);

/* POST request for Updating exhisting vacancy */
router.post('/update', vacancy_controller.vacancy_create_post);

/* POST request for Deleting exhisting vacancy */
router.post('/delete', vacancy_controller.vacancy_create_post);

/* POST request for Deleting exhisting vacancy */
router.post('/search', vacancy_controller.vacancy_search_post);

/* POST request for getting vacancy details */
router.post('/detail', vacancy_controller.vacancy_detail_post);

//Export the module
module.exports = router;