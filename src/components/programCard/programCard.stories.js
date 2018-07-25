import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';


import ProgramCard from './index';


const fixture_programLightInfo = {
  "id": "3",
  "name": "Coding Club",
  "schoolCode": "4548",
  "year": "2018",
  "createdBy": "1",
  "updatedDate": 1530238113250,
  "createdDate": 1530238113250
};

const fixture_programFullInfo = {
  "id": "1",
  "schoolCode": "4548",
  "category": "Curriculum Engagement",
  "subCategory": "Literacy",
  "aims": "L3 is a whole-class intervention that aims to reduce the\nrisk of students not achieving expected literacy levels by\nthe end of their first year of schooling.",
  "description": "L3 is a research-based Kindergarten classroom\nintervention, targeting text reading and writing. It provides\nrich literacy experiences through systematic and explicit\nteaching.",
  "descriptionFull": null,
  "website": "https://education.nsw.gov.au/teaching-and-learning/curriculum/literacy-and-numeracy/literacy/Language,-Learning-and-Literacy",
  "participantGroups": [
    "Students"
  ],
  "participantGroupsDescription": null,
  "focusGroup": null,
  "focusGroupOther": null,
  "yearLevels": [
    "K",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
  ],
  "cohortSize": 20,
  "deliveredByType": "School Staff",
  "externalProvider": null,
  "staff": [
    "1"
  ],
  "year": 2018,
  "terms": [
    1
  ],
  "tags": [
    "reading",
    "writing",
    "vocabulary"
  ],
  "createdDate": 1530238113250,
  "createdBy": "1",
  "updatedBy": "1",
  "updatedDate": 1530238113250,
  "name": "Language, Learning and Literacy (L3)"
};

const fixture_snippetsSingular = [
  {
    "id": "1",
    "type": "photo",
    "description": "Ubi est bi-color era?",
    "programId": "1",
    "attachment": {
      "format": "jpeg",
      "width": 600,
      "height": 400,
      "filename": "image01.jpg",
      "url": "https://picsum.photos/600/400"
    },
    "createdBy": "1",
    "createdDate": 1530238113250
  }
];
const fixture_snippetsSingular2 = [
  {
    "id": "2",
    "type": "photo",
    "description": "Est varius indictio, cesaris?",
    "programId": "1",
    "attachment": {
      "format": "jpeg",
      "width": 600,
      "height": 400,
      "filename": "image02.jpg",
      "url": "https://picsum.photos/600/400"
    },
    "createdBy": "1",
    "createdDate": 1530238113250
  }
];

const fixture_snippetsMany = [
  fixture_snippetsSingular,
  fixture_snippetsSingular2,
];


storiesOf('Program Card', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('Type - has program data (light)', () => (
    <ProgramCard program={fixture_programLightInfo} />
  ))

  .add('Type - has program data (full)', () => (
    <ProgramCard program={fixture_programFullInfo} />
  ))

  .add('Type - light program data + has Snippets (singular)', () => (
    <ProgramCard program={fixture_programLightInfo} snippets={fixture_snippetsSingular} />
  ))

  .add('Type - full program data + has Snippets (singular)', () => (
    <ProgramCard program={fixture_programFullInfo} snippets={fixture_snippetsSingular} />
  ))

  .add('Type - light program data + has Snippets (many)', () => (
    <ProgramCard program={fixture_programLightInfo} snippets={fixture_snippetsMany} />
  ))

;
