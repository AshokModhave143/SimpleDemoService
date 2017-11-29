//Dependencies
let ErrorModel = require('./../model/error');


/* Error Controller Functions */
exports.handle_error = function(req, res) {
    ErrorModel.handleErrorApi().then((output)=> {
        //res.send(JSON.stringify(output));
        return res.json(output);
    }).catch((error)=> {
        //res.send(JSON.stringify(error));
        return res.json(error);
    });
};