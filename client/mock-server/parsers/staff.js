var raw = require('./../raw/staff.json');

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    return {
      "id": String(d.staffid),
      "first": d.firstname,
      "last": d.lastname,
      "email": d.email,
      "avatar": null,
      "schools": `[${String(d.schoolcode)}]`,
      "programsCreated": [],
      "programsFacilitated": [],
    };
  }));
};

console.log(makeJson(raw));
