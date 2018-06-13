import React from 'react';
import { storiesOf } from '@storybook/react';

import Part3Focus from './index';


storiesOf('Program Form Part 3 - Focus', module)

  .add('should render correctly', () => {
    return (
      <Part3Focus index="3" totalIndex="10" />
    )
  })

;
