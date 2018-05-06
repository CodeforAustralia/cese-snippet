import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import StepProgress from './index';


storiesOf('Step Progress', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render', () => {
    return (
      <StepProgress options={[
        { to: '/account/create-program#step-1', label: 'What is the program and when did it happen?' },
        { to: '/account/create-program#step-2', label: 'Why did the program happen?' },
        { to: '/account/create-program#step-3', label: 'Who and how?' },
      ]} />
    )
  })

;
