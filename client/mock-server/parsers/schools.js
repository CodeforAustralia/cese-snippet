var arrayify = require('./../arrayify');
var raw = require('./../raw/schools.json');

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    return {
      "code": String(d.School_code),
      "name": d.School_name,
      "yearLevels": arrayify(String(d.yearLevels)),
    };
  }));
};


console.log(makeJson(raw));
