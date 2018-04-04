var raw = require('./../raw/schools.json');

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
      "code": String(d.School_code),
      "name": d.School_name,
      "yearLevels": arrify(d.yearLevels),
    };
  }));
};


console.log(makeJson(raw));
