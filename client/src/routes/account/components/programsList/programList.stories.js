import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MemoryRouter } from 'react-router';


import ProgramsList from './index';

storiesOf('Programs List', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => <ProgramsList programs={[{
    "id": "1",
    "code": "21312",
    "name": "Mars Program 1",
    "category": "Curriculum engagement",
    "subCategory": "Literacy",
    "aims": null,
    "description": "Gallus peregrinationess, tanquam castus burgus.",
    "descriptionFull": "Placidus, superbus terrors tandem vitare de brevis, velox adelphis pius capio sed mire pugnas secula est. Luna regius apolloniates cabulare de lotus finis, experientia torus est Fraticinidas mori!",
    "website": null,
    "participantGroups": ["Students"],
    "participantGroupsDescription": "Disadvantaged",
    "yearLevels": [
      "7",
      "8"
    ],
    "cohortSize": 120,
    "deliveredByType": "School staff",
    "staff": [
      "8787"
    ],
    "year": "2018",
    "terms": [2, 3],
    "tags": ["spelling"],
    "createdAt": "2017-02-04T23:56:38.363Z",
    "createdBy": "298364",
    "updatedBy": "8787",
    "updatedAy": "2018-02-04T23:56:38.363Z"
  }]} />)
;
