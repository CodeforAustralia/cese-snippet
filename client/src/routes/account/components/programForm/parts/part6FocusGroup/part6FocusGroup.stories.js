import React from 'react';
import { storiesOf } from '@storybook/react';

import Part6FocusGroup from './index';


storiesOf('Program Form Part 6 - Focus Group', module)

  .add('should render correctly', () => {
    return (
      <Part6FocusGroup index="6" totalIndex="10" />
    )
  })

;
