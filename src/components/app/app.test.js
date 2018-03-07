/* global it,expect */
import React from 'react';
import {mount} from 'enzyme';

import App from './app';

it('renders without crashing', () => {
  const wrapper = mount(<App key={1} fetchSession={() => Promise.resolve()} session={{data:{}}} />, {
    // mock context
    isAuthenticated: true,
  });
  expect(wrapper.instance()).toBeTruthy();
});
