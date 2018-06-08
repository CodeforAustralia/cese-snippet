import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';


storiesOf('Give Feedback Embed - Modal', module)

  .add('should open modal on click', () => {
    return (
      <Button link="https://snippet1.typeform.com/to/ezQ2ub" />
    )
  })

;
