import React from 'react';
import { storiesOf } from '@storybook/react';

import Part4Audience from './index';


storiesOf('Program Form Part 4 - Audience', module)

  .add('should render correctly', () => {
    return (
      <Part3Focus index="4" totalIndex="10" />
    )
  })

;
