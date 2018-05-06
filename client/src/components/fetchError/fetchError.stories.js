import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FetchError from './index';


storiesOf('Fetch error', module)

  .add('should render', () => {
    return (
      <FetchError message="JSON.data is not formatted" name="Schools" onRetry={() => action('Retried')} />
    )
  })

;
