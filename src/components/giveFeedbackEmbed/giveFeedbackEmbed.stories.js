import React from 'react';
import { storiesOf } from '@storybook/react';

import EmbeddedForm from './index';


storiesOf('Give Feedback Embed', module)

  .add('should display embedded form', () => {
    return (
      <EmbeddedForm link="https://snippet1.typeform.com/to/ezQ2ub" />
    )
  })

;
