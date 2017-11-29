//Dependecies
let express = require('express');
let router = express.Router();

//Module imports
let errorController = require('./../controller/errorController');

/* Error Routes */
//GET error handle
router.get('/', errorController.handle_error);

//POST error handle
router.post('/', errorController.handle_error);


//Export the router module
module.exports = router;