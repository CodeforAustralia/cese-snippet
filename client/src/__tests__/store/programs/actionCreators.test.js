/* global describe, it, expect, beforeEach */

import isObject from 'lodash/isObject';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import api from 'store/apiInterface';
import sinon from 'sinon';

import { mockFetch } from "mockFetch";
import {
  createOrUpdatePrograms,
  setFilter,
  fetchProgramsByFilters,
} from 'store/programs/actionCreators';
import { ACTION_TYPES } from 'store/programs/reducer';
import sampleState from "__mocks__/sampleState";


const mockStore = configureStore([
  thunkMiddleware.withExtraArgument(api)
]);

describe('Programs Action Creators', () => {

  describe('createOrUpdatePrograms', () => {
    it('should provide a FLUX standard action type', () => {
      const data = { id: '112' };
      const actual = createOrUpdatePrograms(data);
      expect(Object.keys(actual).includes('type')).toBe(true);
      expect(Object.keys(actual).includes('payload')).toBe(true);
    });

    it('should provide a payload with correct shape when provided a single school', () => {
      const data = { id: '112' };
      const actual = createOrUpdatePrograms(data);
      const { payload: { programs } } = actual;
      expect(isObject(programs)).toBe(true);
      expect(programs["112"]).toBeDefined();
    });

    it('should provide a payload with correct shape when provided many schools', () => {
      const data = [
        { id: '112' },
        { id: '234' },
      ];
      const actual = createOrUpdatePrograms(data);
      const { payload: { programs } } = actual;
      expect(isObject(programs)).toBe(true);
      expect(programs["112"]).toBeDefined();
      expect(programs["234"]).toBeDefined();
    });
  });


  describe('setFilter', () => {
    it('should provide a FLUX standard action type', () => {
      const data = [{ id: '112' }];
      const actual = setFilter(data, {code:"112", year:'2018'});
      expect(Object.keys(actual).includes('type')).toBe(true);
      expect(Object.keys(actual).includes('payload')).toBe(true);
    });
  });


  describe('fetchProgramsByFilters', () => {
    let store;
    beforeEach(() => {
      store = mockStore({
        app: {},
        session: {},
        schools: {},
        programs: {
          byId: {
            '1': {
              id: "1",
              schoolCode: "21312",
              year: '2017',
            },
            '2': {
              id: "2",
              schoolCode: "21312",
              year: '2017',
            },
            '100': {
              id: "100",
              schoolCode: "21312",
              year: '2018',
            },
          },
          isFetching: false,
          errorMessage: null,
          filters: {
            '21312_2017': {
              ids: [
                "1",
                "2"
              ]
            }
          }
        },
        programTemplates: {},
      });
    });

    it('should retrieve a response that contains school', () => {
      expect.assertions(1);

      const resp = { data: [ { id:'100', code: '1232', year: '2018' } ] };
      mockFetch('/programs?code=1232&year=2018', 201, resp);

      return store.dispatch(fetchProgramsByFilters({code:1232, year:2018})).then((resp) => {
        expect(resp).toBe(resp);
      });
    });

    it('should delegate correct actions on success', () => {
      const resp = { data: [ { id:'100', code: '1232', year: '2018' } ] };
      mockFetch('/programs?code=1232&year=2018', 201, resp);

      return store.dispatch(fetchProgramsByFilters({code:1232, year:2018})).then((resp) => {
        const actionsCalled = store.getActions();
        expect(actionsCalled.map(a => a.type)).toEqual(
          expect.arrayContaining([
            ACTION_TYPES.fetchRequest,
            ACTION_TYPES.setFilter,
            ACTION_TYPES.fetchSuccess
          ]
        ));
      });
    });

    it('should delegate correct actions on error', () => {
      const resp = { message: 'Not found' };
      mockFetch('/programs?code=1232&year=2018', 404, resp);

      return store.dispatch(fetchProgramsByFilters({code:1232, year:2018})).then((resp) => {
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
