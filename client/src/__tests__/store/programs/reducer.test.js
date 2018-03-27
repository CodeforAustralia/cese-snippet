/* global it, describe, expect */
import {
  ACTION_TYPES,
  filters,
} from 'store/programs/reducer';

describe('Programs Reducer', () => {

  describe('Filter', () => {

    it('should replace filter if filterKey exists', () => {
      const state = {
        '21312_2018': ["1", "2"]
      };
      const action = {
        type: ACTION_TYPES.setFilters,
        payload: {
          filters: {
            '21312_2018': ["3"]
          }
        }
      };
      const actual = filters(state, action);

      expect(actual['21312_2018'].length).toBe(1);
      expect(actual['21312_2018']).toEqual(expect.arrayContaining(["3"]));
    });


    it('should create new filter if filterKey does not exist', () => {
      const state = {
        '21312_2018': ["1", "2"]
      };
      const action = {
        type: ACTION_TYPES.setFilters,
        payload: {
          filters: {
            '78672_2018': ["3"]
          }
        }
      };
      const actual = filters(state, action);

      expect(Object.keys(actual).length).toBe(2);
      expect(actual['21312_2018']).toBeDefined();
      expect(actual['78672_2018']).toBeDefined();
      expect(actual['21312_2018']).toEqual(expect.arrayContaining(["1", "2"]));
      expect(actual['78672_2018']).toEqual(expect.arrayContaining(["3"]));
    });

  });
});
