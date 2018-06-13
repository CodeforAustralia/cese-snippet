import React from 'react';
import { storiesOf } from '@storybook/react';

import Part10DeliveredBy from './index';


storiesOf('Program Form Part 11 - Additional', module)

  .add('should render correctly', () => {
    return (
      <Part10DeliveredBy index="optional" />
    )
  })

;
