var raw = require('./../raw/staff.json');

var arrify = (str) => {
  let a = str.slice(1, str.length -1);
  if (a.includes(',')) {
    return JSON.stringify(a.split(','));
  }
  return JSON.stringify(a);
};

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    return {
      "id": String(d.staffid),
      "first": d.firstname,
      "last": d.lastname,
      "email": d.email,
      "avatar": null,
      "schools": String(d.schoolcode)
    };
  }));
};


console.log(makeJson(raw));
