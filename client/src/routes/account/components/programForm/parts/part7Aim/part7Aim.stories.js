import React from 'react';
import { storiesOf } from '@storybook/react';

import Part7Aim from './index';


storiesOf('Program Form Part 7 - Aim', module)

  .add('should render correctly', () => {
    return (
      <Part7Aim index="7" totalIndex="10" />
    )
  })

;
