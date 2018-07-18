import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import BreadcrumbArrow from './index';


storiesOf('Breadcrumb Arrow', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render', () => {
    return (
      <BreadcrumbArrow linkList={[
        { to: '/', label: '1' },
        { to: '/', label: '2', active: true, },
      ]} />
    )
  })

;
