// Dependencies
let responseStruct = require('./response');
let sf = require('node-salesforce');

//Declarations
let conn = null;

//Initializations
let login = function() {
    console.log('login method');
    
    conn = new sf.Connection({
        loginUrl: 'https://test.salesforce.com/'
    });
    conn.login('***REMOVED***', '***REMOVED***', function(err, userInfo) {
        if(err) {
            return console.log(err);
        }
        console.log(conn.accessToken);
        console.log(conn.instanceUrl);

        // logged in user property 
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        return userInfo;
    });
};
if(conn == null) {    
    login();
}
//Function Modules
exports.getLeadInfoApi = function() {
    //let ln = login();
    return new Promise((resolve, reject)=> {
        conn.query('SELECT Id, Name FROM Account', function(err, result){
            if(err) {
                reject(responseStruct.create_response(err));
            }
            //console.log('Total : ' + result.totalSize);
            //console.log('fetched : ' + result.records.length);
            //console.log(result.records[0]);

            let output = 'Great. We got Lead records for you. There are - '
                        + ' Total : ' + result.totalSize + ' | Total Fetched : ' + result.records.length 
                        + ' Detail records as below -'
                        + ' ---------------------------------------------------------';
            for(var i in result.records) {                
                let str = 'Id : ' + result.records[i].Id + ' | Name : ' + result.records[i].Name + ' | Url : ' + result.records[i].attributes.url + ' ## ';
                output += str ;

                //console.log(i + ' : ' + str);
            }
            if(i == (result.records.length-1))
                resolve(output);
        });
    });
};