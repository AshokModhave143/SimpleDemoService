// Dependencies
let responseStruct = require('./response');

/* Error Handleing Functions */
//GET - handle error
exports.handleErrorApi = function() {
    return new Promise((resolve, reject)=> {
        let errortext = 'I am sorry. I could not recognise the action. You may need to correct your settings or contact Administrator. ';
        reject(responseStruct.create_response(errortext));
    });
};