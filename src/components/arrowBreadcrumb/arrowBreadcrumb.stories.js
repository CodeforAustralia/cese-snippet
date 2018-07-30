import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import ArrowBreadcrumb from './index';


storiesOf('Arrow Breadcrumb', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render at step 1 of 3', () => {
    return (
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1', visited: true,  disabled: true, active: true, },
        { to: '/', label: '2', visited: false, disabled: true, },
        { to: '/', label: '3', visited: false, disabled: true, },
      ]} />
    )
  })

  .add('should render at step 2 of 3', () => {
    return (
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1', visited: true,  disabled: false, },
        { to: '/', label: '2', visited: false, disabled: true, active: true, },
        { to: '/', label: '3', visited: false, disabled: true, },
      ]} />
    )
  })

  .add('should render at step 3 of 3', () => {
    return (
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1', visited: true,  disabled: false, },
        { to: '/', label: '2', visited: true, disabled: false, },
        { to: '/', label: '3', visited: false, disabled: true, active: true, },
      ]} />
    )
  })

;
