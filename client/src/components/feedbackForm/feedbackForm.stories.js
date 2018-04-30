import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import FeedbackForm from './index';

storiesOf('Feedback form', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render correctly', () => {

    return (
      <FeedbackForm onSubmit={(values) => action('submitted', values)} />
    )
  })

;
