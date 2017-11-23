// Dependencies
var restful = require('node-restful');

// Scheme
var vacancySchema = {
    department: String,
    positionTitle: String,
    noOfPositions: Number
};

console.log("here i am in vacancies");
// Return
module.exports  = restful.model('Vacancies', vacancySchema);