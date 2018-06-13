import React from 'react';
import { storiesOf } from '@storybook/react';

import Part10DeliveredBy from './index';


storiesOf('Program Form Part 10 - Delivered By', module)

  .add('should render correctly', () => {
    return (
      <Part10DeliveredBy index="10" totalIndex="10" />
    )
  })

;
