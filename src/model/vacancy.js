// Dependencies
let responseStruct = require("./response");
let request = require("request");

//Data respository
let data = require("./../../dataInput/datafile.json");
const { getConfig } = require("../config");

/* Function modules */
//Default GET
exports.defaultGetApi = function () {
  return new Promise((resolve, reject) => {
    let output = "Hello. Greetings. welcome to my page.";
    resolve(responseStruct.create_response(output));
    //reject(create_response('Exception Thrown.'));
  });
};
//Default test GET
exports.testGetApi = function () {
  return new Promise((resolve, reject) => {
    //let output = "Great. Test GET is successful. Cheers!!!. You doing great. ";
    let output =
      "<p>Great. Test GET is successful. Cheers!!!. You doing great.</p><input type='text' placeholder='enter value'>";
    resolve(responseStruct.create_response(output));
    //reject(create_response(output));
  });
};
//List all vacancies API
exports.listAllAPi = function (dept, pos) {
  return new Promise((resolve, reject) => {
    let output = "We got you all vacancies available with us. ";
    let flag = true;
    for (let i in data.vacancylist) {
      if (dept && pos) {
        if (
          data.vacancylist[i].department == dept &&
          data.vacancylist[i].position == pos
        ) {
          output =
            output +
            "There are " +
            data.vacancylist[i].vacantPositions +
            " vacancies available in " +
            data.vacancylist[i].department +
            " for " +
            data.vacancylist[i].position +
            " role. ";
          flag = false;
        }
      } else if (dept) {
        if (data.vacancylist[i].department == dept) {
          output =
            output +
            "There are " +
            data.vacancylist[i].vacantPositions +
            " vacancies available in " +
            data.vacancylist[i].department +
            " for " +
            data.vacancylist[i].position +
            " role. ";
          flag = false;
        }
      } else if (pos) {
        if (data.vacancylist[i].position == pos) {
          output =
            output +
            "There are " +
            data.vacancylist[i].vacantPositions +
            " vacancies available in " +
            data.vacancylist[i].department +
            " for " +
            data.vacancylist[i].position +
            " role. ";
          flag = false;
        }
      } else {
        output =
          output +
          "There are " +
          data.vacancylist[i].vacantPositions +
          " vacancies available in " +
          data.vacancylist[i].department +
          " for " +
          data.vacancylist[i].position +
          " role. ";
        flag = false;
      }
    }
    output += "Thank you!!!";
    if (flag) {
      if (dept && pos) {
        output =
          "Sorry. There are no vacancies available in " +
          dept +
          " department for " +
          pos +
          " role. ";
      } else if (pos) {
        output =
          "Sorry. There are no vacancies available for " +
          pos +
          " role in any department. ";
      } else if (dept) {
        output =
          "Sorry. There are no vacancies available in " +
          dept +
          " department for any role. ";
      }
      reject(responseStruct.create_response(output));
    } else {
      resolve(responseStruct.create_response(output));
    }
  });
};
//List all vacancies API
exports.searchAPi = function (dept, pos) {
  return new Promise((resolve, reject) => {
    let output = "";
    let flag = true;

    if (!dept || !pos) {
      output =
        "Did you missed something. you must mention either of the parameter: department, jobid, position. Can you try again.";
      reject(responseStruct.create_response(output));
    }
    for (let i in data.vacancylist) {
      if (dept && pos) {
        if (
          data.vacancylist[i].department == dept &&
          data.vacancylist[i].position == pos
        ) {
          output =
            output +
            "There are " +
            data.vacancylist[i].vacantPositions +
            " vacancies available in " +
            data.vacancylist[i].department +
            " for " +
            data.vacancylist[i].position +
            " role with job id " +
            data.vacancylist[i].jid +
            ". ";
          flag = false;
        }
      }
      // else if(dept) {
      //     if(data.vacancylist[i].department == dept) {
      //         output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
      //         flag = false;
      //     }
      // }
      // else if(pos) {
      //     if(data.vacancylist[i].position == pos) {
      //         output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
      //         flag = false;
      //     }
      // }
    }
    if (flag) {
      if (dept && pos) {
        output =
          "Sorry. There are no vacancies available in " +
          dept +
          " department for " +
          pos +
          " role. ";
      }
      reject(responseStruct.create_response(output));
    } else {
      resolve(responseStruct.create_response(output));
    }
  });
};

//Create/Add new vacancy API
exports.createApi = function (jobid, dept, vacantPos, pos) {
  return new Promise((resolve, reject) => {
    let output = "";
    let isalreadyPresent = false;

    //validation
    if (!jobid) {
      reject(
        responseStruct.create_response(
          "Oops. you have missed Job id parameter. Can not create vacancy. Please try again. "
        )
      );
    }
    if (!dept) {
      reject(
        responseStruct.create_response(
          "Oops. you have missed department parameter. Can not create vacancy. Please try again. "
        )
      );
    }
    if (!vacantPos) {
      reject(
        responseStruct.create_response(
          "Oops. you have not mentioned how many vacancies you want to create. Can not create vacancy. Please try again. "
        )
      );
    }
    if (!pos) {
      reject(
        responseStruct.create_response(
          "Oops. you have missed position/role parameter. Can not create vacancy. Please try again. "
        )
      );
    }

    console.log(jobid + ": " + dept + " : " + vacantPos + " : " + pos);

    //Search if already present else add new record
    for (var i in data.vacancylist) {
      console.log(data.vacancylist[i].jid);
      if (
        data.vacancylist[i].jid == jobid &&
        data.vacancylist[i].department == dept &&
        data.vacancylist[i].position == pos
      ) {
        data.vacancylist[i].vacantPositions += vacantPos;
        console.log("found record");
        isalreadyPresent = true;
        output =
          "It seems vacancy record already present. New vacancy positons has been added to existing record. ";
      }
    }
    if (!isalreadyPresent) {
      data.vacancylist.push({
        jid: jobid,
        department: dept,
        vacantPositions: vacantPos,
        position: pos,
      });
      output = "New vacancy positons has been created. ";
    }
    resolve(responseStruct.create_response(output));
  });
};

//FB hook
exports.getFbHookApi = function (req) {
  return new Promise((resolve, reject) => {
    console.log(req.body.id); //page id
    console.log(req.body.originalRequest.data);
    //responseStruct.create_response(JSON.stringify(req.body.id));
    let user_id = req.body.originalRequest.data.sender.id;
    getUserinfo(user_id).then((resp) => {
      resolve(responseStruct.create_response(resp));
    });
  });
};
let getUserinfo = (userid) => {
  return new Promise((resolve, reject) => {
    let output = "";
    let page_access_token = getConfig().PAGE_ACCESS_TOKEN;
    let url =
      "https://graph.facebook.com/v2.6/" +
      userid +
      "?fields=name,first_name,last_name,profile_pic&access_token=" +
      page_access_token;

    const options = {
      url: url,
      method: "GET",
    };

    request(options, (err, res, body) => {
      let json = JSON.parse(body);
      console.log(json);
      if (err) {
        output =
          "Oops. We are so sorry. I am not feeling well. Please contact Administrator. " +
          err;
        reject(output);
      } else {
        output = "Hi " + json.first_name + ", ";
        output += "Welcome to HR Portal. How may i help you ?";
        resolve(output);
      }
    });
  });
};
