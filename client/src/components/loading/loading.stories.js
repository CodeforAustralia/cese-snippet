import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './index';


storiesOf('Loading', module)

  .add('should load continuously', () => {
    return (
      <Loading />
    )
  })

;
