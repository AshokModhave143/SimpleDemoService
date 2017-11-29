// Dependencies

//Data respository
var data = require('./../../dataInput/datafile.json');

//Create Response Structure
let create_response = function(text) {
    return {
        speech: text,
        displayText: text,
        source: 'simpledemoservice'
    };
};
/* Function modules */
//Default GET
exports.defaultGetApi = function() {
    return new Promise((resolve, reject)=>{
        let output = 'Hello. Greetings. welcome to my page.';
        resolve(create_response(output));        
        //reject(create_response('Exception Thrown.'));
    });
};
//Default test GET
exports.testGetApi = function() {
    return new Promise((resolve, reject)=> {
        let output = "Great. Test GET is successful. Cheers!!!. You doing great.";
        resolve(create_response(output));
        //reject(create_response(output));
    });
};
//List all vacancies API
exports.listAllPostAPi = function() {
    return new Promise((resolve, reject)=> {
        let output = 'We got you all vacancies available with us.';
        for(let i in data.vacancylist) {
            output = output + 'There are' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
        }
        output += 'Thank you!!!';
        if(data.vacancylist.length == 0) {
            output = "There are no vacancies available in any department";
            reject(create_response(output));
        }else {
            resolve(create_response(output));
        }
    });
}


