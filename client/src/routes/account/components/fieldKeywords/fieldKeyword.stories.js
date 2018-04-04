import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldKeywords from './index';

storiesOf('Field - keywords', module)
  .add('default', () =>
    <FieldKeywords name="tags" options={[
      { value: 'R', label: 'Red' },
      { value: 'G', label: 'Green' },
      { value: 'B', label: 'Blue' }
    ]} />
  )
;
