//Dependencies
var express = require('express');
var router = express.Router();

//Redirect the request to sub-catelog
router.get('/', function(req, res){
    res.redirect('/vacancy');
});

module.exports = router;