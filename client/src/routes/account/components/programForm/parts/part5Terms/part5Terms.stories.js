import React from 'react';
import { storiesOf } from '@storybook/react';

import Part5Terms from './index';


storiesOf('Program Form Part 5 - Terms', module)

  .add('should render correctly', () => {
    return (
      <Part5Terms index="5" totalIndex="10" />
    )
  })

;
