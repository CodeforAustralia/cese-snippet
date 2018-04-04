import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FieldCode from './index';

storiesOf('Field - code', module)
  .add('A single school', () =>
    <FieldCode name="code" options={[{ value: "1", label: "School 1" }]} onChange={action('on change')} onBlur={action('on blur')} />
  )
  .add('Many schools', () =>
    <FieldCode name="code" options={[
      { value: "1", label: "School 1" },
      { value: "2", label: "School 2" },
      { value: "3", label: "School 3" }
    ]} onChange={action('on change')} onBlur={action('on blur')} />
  )
;
