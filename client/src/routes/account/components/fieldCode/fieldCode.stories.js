import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldCode from './index';

storiesOf('Field - code', module)
  .add('A single school', () =>
    <FieldCode id="code" name="code" options={[{ value: "1", label: "School 1" }]} />
  )
  .add('Many schools', () =>
    <FieldCode id="code" name="code" options={[{ value: "1", label: "School 1" },
      { value: "2", label: "School 2" },
      { value: "3", label: "School 3" }]} />
  )
;
