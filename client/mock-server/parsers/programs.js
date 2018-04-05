var arrayify = require('./arrayify');
var raw = require('./../raw/programs.json');

var makeJson = (data) => {
  return JSON.stringify(data.map(d => {
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
      "yearLevel": arrayify(d.yearLevel),
      "cohortSize": d.cohortSize,
      "deliveredByType": d.deliveredByType,
      "externalProvider": d.externalProvider,
      "staff": Array.isArray(d.staff) ? d.staff.map(d => String(d)) : d.staff,
      "year": String(d.yearDelivered),
      "terms": d.termsDelivered,
      "tags": arrayify(d.tags),
      "createdAt": d.createdAt,
      "createdBy": String(d.createdBy),
      "updatedBy": String(d.updatedBy),
      "updatedAt": d.updatedAt,
    }
  }));
};

console.log(makeJson(raw));


