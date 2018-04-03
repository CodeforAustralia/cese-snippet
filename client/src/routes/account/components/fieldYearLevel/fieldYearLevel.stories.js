import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldYearLevel from './index';

storiesOf('Field - yearLevel', module)
  .add('default', () =>
    <FieldYearLevel name="yearLevel" options={[
      { label: "Kindergarten", value: 'K' },
      { label: "1", value: '1' },
      { label: "2", value: '2' },
      { label: "3", value: '3' },
      { label: "4", value: '4' },
      { label: "5", value: '5' },
      { label: "6", value: '6' },
    ]} />
  )
  .add('disabled', () =>
    <FieldYearLevel name="yearLevel" disabled={true} options={[
      { label: "Kindergarten", value: 'K' },
      { label: "1", value: '1' },
      { label: "2", value: '2' },
      { label: "3", value: '3' },
      { label: "4", value: '4' },
      { label: "5", value: '5' },
      { label: "6", value: '6' },
    ]} />
  )
;
