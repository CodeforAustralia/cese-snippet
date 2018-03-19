/* global describe, expect, it, beforeEach */

import isObject from 'lodash/isObject';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import api from 'store/apiInterface';
import { mockFetch, mockFetchError } from "__mocks__/mockFetch";

import {
  createOrUpdateSchools,
  fetchSchool,
  fetchSchools,
} from 'store/schools/actionCreators';
import { ACTION_TYPES } from 'store/schools/reducer';
import sampleState from "__mocks__/sampleState";


const mockStore = configureStore([
  thunkMiddleware.withExtraArgument(api)
]);

describe('Schools Action Creators', () => {

  describe('createOrUpdateSchools', () => {
    it('should provide a FLUX standard action type when provided a single school', () => {
      const data = { code: '112' };
      const actual = createOrUpdateSchools(data);
      expect(Object.keys(actual).includes('type')).toBe(true);
      expect(Object.keys(actual).includes('payload')).toBe(true);
    });

    it('should provide a payload with correct shape when provided a single school', () => {
      const data = { code: '112' };
      const actual = createOrUpdateSchools(data);
      const { payload: { schools } } = actual;
      expect(isObject(schools)).toBe(true);
      expect(schools["112"]).toBeDefined();
    });

    it('should provide an FLUX standard action type when provided many schools', () => {
      const data = [
        { code: '112' },
        { code: '234' },
      ];
      const actual = createOrUpdateSchools(data);
      expect(Object.keys(actual).includes('type')).toBe(true);
      expect(Object.keys(actual).includes('payload')).toBe(true);
    });

    it('should provide a payload with correct shape when provided many schools', () => {
      const data = [
        { code: '112' },
        { code: '234' },
      ];
      const actual = createOrUpdateSchools(data);
      const { payload: { schools } } = actual;
      expect(isObject(schools)).toBe(true);
      expect(schools["112"]).toBeDefined();
      expect(schools["234"]).toBeDefined();
    });
  });


  describe('fetchSchool', () => {
    let store;
    beforeEach(() => {
      store = mockStore(sampleState);
    });

    it('should retrieve a school', () => {
      expect.assertions(1);
      const resp = { data: [ { code: '1232' } ] };
      mockFetch(`/schools/1232`, 201, resp);
      return store.dispatch(fetchSchool('/schools/1232')).then((resp) => {
        expect(resp).toBe(resp);
      });
    });
  });


  describe('fetchSchools', () => {
    let store;
    beforeEach(() => {
      store = mockStore();
    });

    it('should retrieve a response that contains schools', () => {
      expect.assertions(1);
      const resp = { data: [ { code: '1212' } ] };
      mockFetch(`/schools/1212`, 201, resp);

      return store.dispatch(fetchSchool("1212")).then((resp) => {
        expect(resp).toBe(resp);
      });
    });

    it('should delegate correct actions on success', () => {
      expect.assertions(1);
      const resp = { data: [ { code: '1212' } ] };
      mockFetch(`/schools/1212`, 201, resp);

      return store.dispatch(fetchSchool("1212")).then((resp) => {
        const actionsCalled = store.getActions();
        expect(actionsCalled.map(a => a.type)).toEqual(
          expect.arrayContaining([
            ACTION_TYPES.fetchRequest,
            ACTION_TYPES.fetchSuccess,
          ]
        ));
      });
    });

    it('should delegate correct actions on error - resource not found', () => {
      expect.assertions(1);
      const resp = { message: 'Not found', data: {} };
      mockFetchError(`/schools/1212`, 404, resp);

      return store.dispatch(fetchSchool("1212")).then((resp) => {
        const actionsCalled = store.getActions();

        expect(actionsCalled.map(a => a.type)).toEqual(
          expect.arrayContaining([
            ACTION_TYPES.fetchRequest,
            ACTION_TYPES.fetchError,
          ]
        ));
      });
    });

  });

});
