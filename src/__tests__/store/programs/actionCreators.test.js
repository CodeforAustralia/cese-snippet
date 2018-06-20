/* global describe, it, expect, beforeEach */

import isObject from 'lodash/isObject';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import api from 'store/apiInterface';

import { mockFetch } from "__mocks__/mockFetch";
import {
  createFilter,
  updateFilter,
  fetchProgramsByFilter,
  createProgram,
  fetchFromApi,

} from 'store/programs/actionCreators';
import { ACTION_TYPES } from 'store/programs/reducer';


const mockStore = configureStore([
  thunkMiddleware.withExtraArgument(api)
]);

describe('Programs Action Creators', () => {

  describe('fetchProgramsByFilter', () => {
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
              code: "21312",
              year: '2017',
            },
            '2': {
              id: "2",
              code: "21312",
              year: '2017',
            },
            '100': {
              id: "100",
              code: "21312",
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

    it('should retrieve a response that contains programs', () => {
      expect.assertions(1);

      const resp = { data: [ { id:'100', code: '1232', year: '2018' } ] };
      mockFetch('/programs?code=1232&year=2018', 201, resp);

      return store.dispatch(fetchProgramsByFilter({code:1232, year:2018})).then((resp) => {
        expect(resp).toBe(resp);
      });
    });

    it('should delegate correct actions on success', () => {
      expect.assertions(1);
      const resp = { data: [ { id:'100', code: '1232', year: '2018' } ] };
      mockFetch('/programs?code=1232&year=2018', 201, resp);

      return store.dispatch(fetchProgramsByFilter({code:1232, year:2018})).then((resp) => {
        const actionsCalled = store.getActions();
        expect(actionsCalled.map(a => a.type)).toEqual(
          expect.arrayContaining([
            ACTION_TYPES.fetchRequest,
            ACTION_TYPES.createFilters,
            ACTION_TYPES.fetchSuccess
          ]
        ));
      });
    });

    it('should delegate correct actions on error', () => {
      expect.assertions(1);
      const resp = { message: 'Not found' };
      mockFetch('/programs?code=1232&year=2018', 404, resp);

      return store.dispatch(fetchProgramsByFilter({code:1232, year:2018})).then((resp) => {
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
