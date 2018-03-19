/* global expect, describe, it, beforeAll, jest */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Container from 'components/app/container';
import sampleState from '__mocks__/sampleState';


const mockStore = configureStore();
const Noop = () => {};

describe('App Container', () => {

  let wrapper;
  let store;

  beforeAll(() => {
    store = mockStore(sampleState);
    store.dispatch = jest.fn();
    const ConnectedContainer = Container(Noop);
    wrapper = shallow(<ConnectedContainer store={store} />);
  });

  it('should render', () => {
    expect(wrapper.dive().length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('should define expected state shape', () => {
      const props = wrapper.props();
      expect(props.session).toBeDefined();
    });
  });

});
