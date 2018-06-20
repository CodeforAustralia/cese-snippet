var arrayify = require('./../arrayify');
var raw = require('./../raw/staff.json');

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    return {
      "id": String(d.id),
      "first": d.first,
      "last": d.last,
      "email": d.email,
      "avatar": null,
      "schools": d.schools,
    };
  }));
};

console.log(makeJson(raw));
