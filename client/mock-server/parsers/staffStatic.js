var arrayify = require('./arrayify');
var raw = require('./../raw/staff.json');

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    return {
      "id": String(d.staffid),
      "email": d.email,
    };
  }));
};

console.log(makeJson(raw));
