//Dependencies
var express = require('express');
var router = express.Router();

//GET - Redirect the request to sub-catelog
router.get('/', function(req, res){
    let action = req.body.result && req.body.result.action ? req.body.result.action : '';
    if(action.length == 0) {
        res.redirect('/error');
    }
    else {
        if(action.indexof('salesforce') != -1) {
            res.redirect('/sf');
        }
        else if(action.indexof('vacancy') != -1) {            
            res.redirect('/vacancy');
        }
    }
});

/* POST - Redirect the request to appropriate function */
router.post('/', function(req, res){        
    //res.redirect('/vacancy');
    let action = req.body.result && req.body.result.action ? req.body.result.action : '';
    if(action.length == 0) {
        res.redirect('/error');
    }
    else {
        if(action.indexOf('salesforce') != -1) {
            res.redirect('/sf');
        }
        else if(action.indexof('vacancy') != -1) {            
            res.redirect('/vacancy');
        }
    }
});

module.exports = router;