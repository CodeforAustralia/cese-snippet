import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import ArrowBreadcrumb from './index';


storiesOf('Arrow Breadcrumb', module)

  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))

  .add('should render', () => {
    return (
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1' },
        { to: '/', label: '2' },
      ]} />
    )
  })

;
