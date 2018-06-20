import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './index';


storiesOf('Avatar', module)

  .add('should render initials MP', () => {
    return (
      <Avatar first="Mary" last="Poppins" />
    )
  })

;
