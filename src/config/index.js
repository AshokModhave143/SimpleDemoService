const dotenv = require("dotenv").config();

if (dotenv.error) {
  throw dotenv.error;
}

console.log(dotenv.parsed);

function getConfig() {
  return process.env;
}

module.exports = { getConfig };
