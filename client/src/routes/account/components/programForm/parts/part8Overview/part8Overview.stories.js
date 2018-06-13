import React from 'react';
import { storiesOf } from '@storybook/react';

import Part8Overview from './index';


storiesOf('Program Form Part 8 - Overview', module)

  .add('should render correctly', () => {
    return (
      <Part8Overview index="8" totalIndex="10" />
    )
  })

;
