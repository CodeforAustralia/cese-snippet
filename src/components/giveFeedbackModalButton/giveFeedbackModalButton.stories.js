import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './index';


storiesOf('Give Feedback - Modal Button', module)

  .add('should render correctly', () => {
    return (
      <Loading />
    )
  })

;
