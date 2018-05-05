// node parsers/programs.js | pbcopy

const arrayify = require('./../arrayify');
const raw = require('./../raw/programs.json');
const random = require('math-random');
const floor = require( 'math-floor' );

const possibleYears = ['2018', '2018', '2018', '2018', '2018', '2018', '2018', '2017'];
const possibleTerms = ['[1,2,3,4]', '[1,2]', '[3,4]', '[1]', '[2]', '[3]', '[4]'];

const getDeliveredByType = (d) => {
  if (d === 'Staff') {
    return 'School Staff';
  }
  return d;
};

const getYearLevels = (d) => {
  if (Array.isArray(d.yearLevels)) {
    return d.yearLevels.map(y => String(y));
  }
  return arrayify(d.yearLevels);
};

const makeJson = (data) => {
  return JSON.stringify(data.map(d => {
    const year = JSON.parse(possibleYears[floor(random() * possibleYears.length)]);
    const terms = JSON.parse(possibleTerms[floor(random() * possibleTerms.length)]);

    return {
      "id": String(d.id),
      "code": String(d.schoolcode),
      "category": d.programArea,
      "subCategory": d.programCategory,
      "aims": d.aims,
      "description": d.description,
      "descriptionFull": d.descriptionFull,
      "website": d.website,
      "participantGroups": arrayify(d.participantGroups),
      "participantGroupsDescription": d.participantGroupsDescription,
      "focusGroup": d.focusGroup,
      "focusGroupOther": d.focusGroupOther,
      "yearLevels": getYearLevels(d),
      "cohortSize": d.cohortSize,
      "deliveredByType": getDeliveredByType(d.deliveredByType),
      "externalProvider": d.externalProvider,
      "staff": Array.isArray(d.staff) ? d.staff.map(d => String(d)) : d.staff,
      "year": year,
      "terms": terms,
      "tags": arrayify(d.tags),
      "createdAt": d.createdAt,
      "createdBy": String(d.createdBy),
      "updatedBy": String(d.updatedBy),
      "updatedAt": d.updatedAt,
      "name": d.name,
    }
  }));
};

console.log(makeJson(raw));


module.exports.getDeliveredByType = getDeliveredByType;
