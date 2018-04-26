import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FeedbackForm from './index';

storiesOf('Feedback form', module)

  .add('should render correctly', () => {
    return (
      <FeedbackForm onSubmit={(values) => action('submitted', values)} />
    )
  })

;
