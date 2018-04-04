import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldSelectTags from './index';
import STAFF_DATA from 'static/staff.json';

storiesOf('Field - select tags', module)
  .add('default', () => {
    const options = STAFF_DATA.staff.map((staff) => ({ value: staff.id, label: staff.email }));
    return (
      <FieldSelectTags name="staff" options={options} />
    )
  })
;
