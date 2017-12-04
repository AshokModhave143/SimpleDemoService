//Dependencies
let SfModel = require('./../model/sf');

//Get Lead information
exports.get_lead_info = function(req, res) {
    SfModel.getLeadInfoApi().then((output)=> {
        return res.json(output);
    }).catch((error)=> {
        return res.json(error);
    });
};