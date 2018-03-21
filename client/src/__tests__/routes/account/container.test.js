/* global describe, it, expect, beforeAll, jest */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Container, {
  mapStateToProps,
  mapDispatchToProps,
} from 'routes/account/container';
import sampleState from '__mocks__/sampleState';


const mockStore = configureStore();
const Noop = () => {};

describe('Account Route Container', () => {

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
      expect(props.schoolCodes).toBeDefined();
      expect(props.defaultCode).toBeDefined();
      expect(props.defaultYear).toBeDefined();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should define expected state shape', () => {
      const props = wrapper.props();
      expect(props.fetchSchools).toBeDefined();
      expect(props.fetchProgramsBySchool).toBeDefined();
    });

    it('should be bound to dispatch', () => {
      const props = wrapper.props();
      expect(store.dispatch.mock.calls.length).toBe(0);
      props.fetchSchools();
      expect(store.dispatch.mock.calls.length).toBe(1);
      props.fetchProgramsBySchool();
      expect(store.dispatch.mock.calls.length).toBe(2);
    });
  });

});
