//Dependencies
let express = require('express');
let router = express.Router();

//Controller Module
let sf_controller = require('./../controller/sfController');
let error_controller = require('./../controller/errorController');

//Functions
router.get('/getLead', sf_controller.get_lead_info);

router.post('/', function(req, res) {
    let action = req.body.result && req.body.result.action ? req.body.result.action : 'default';

    switch(action) {
        case 'salesforce_get_lead_info': sf_controller.get_lead_info(req, res);
        break;
        default: error_controller.handle_error(req, res);
        break;
    }
});

//Export the Router Module
module.exports = router;