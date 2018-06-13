import React from 'react';
import { storiesOf } from '@storybook/react';

import Part9Staff from './index';


storiesOf('Program Form Part 9 - Staff', module)

  .add('should render correctly', () => {
    return (
      <Part9Staff index="9" totalIndex="10" />
    )
  })

;
