import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';


storiesOf('Give Feedback - Modal', module)

  .add('should open modal on click', () => {
    return (
      <Button />
    )
  })

;
