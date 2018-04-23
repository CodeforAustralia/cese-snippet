// node parsers/programTemplates.js | pbcopy

const arrayify = require('./../arrayify');
const raw = require('./../raw/programTemplates.json');

const makeJson = (data) => {
  return JSON.stringify(data.map(d => {

    return {
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
      "yearLevels": arrayify(String(d.yearLevel)),
      "deliveredByType": d.deliveredByType,
      "externalProvider": d.externalProvider,
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
