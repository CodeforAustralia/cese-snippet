import React from 'react';
import { storiesOf } from '@storybook/react';

import Part1School from './index';


storiesOf('Program Form Part 2 - Name', module)

  .add('should render correctly', () => {
    return (
      <Part1School index="2" totalIndex="10" />
    )
  })

;
