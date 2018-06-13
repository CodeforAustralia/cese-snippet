import React from 'react';
import { storiesOf } from '@storybook/react';

import Part1School from './index';


storiesOf('Program Form Part 1 - School', module)

  .add('should render correctly', () => {
    return (
      <Part1School index="1" totalIndex="10" />
    )
  })

;
