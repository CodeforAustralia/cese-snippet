import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import ErrorSummary from './index';


storiesOf('Error Summary', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render', () => {
    return (
      <ErrorSummary errors={{
        'name': 'Required',
        'first': 'Must be a string',
      }} />
    )
  })

;
