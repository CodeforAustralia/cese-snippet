import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldSelectTags from './index';


const staffOptions = [
  {
    "value": "37171",
    "label": "Malorie.Mahn@test.nsw.edu.au"
  },
  {
    "value": "37172",
    "label": "Kenda.Kist@test.nsw.edu.au"
  },
  {
    "value": "41181",
    "label": "Leontine.Leija@test.nsw.edu.au"
  },
  {
    "value": "41182",
    "label": "Aurelio.Aikins@test.nsw.edu.au"
  },
];

storiesOf('Field - select tags', module)
  .add('default', () => {
    return (
      <FieldSelectTags name="staff" options={staffOptions} />
    )
  })
;
