/* global it, describe, expect */
import {
  ACTION_TYPES,
  filters,
} from 'store/programs/reducer';

describe('Programs Reducer', () => {

  describe('Filters', () => {
    it('should update filters if filterKey exists', () => {
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
      expect(actual['21312_2018'].length).toBe(3);
      expect(actual['21312_2018']).toEqual(expect.arrayContaining(["1", "2", "3"]));
    });

    it('should expect no change if id exists in filterKey', () => {
      const state = {
        '21312_2018': ["1", "2"]
      };
      const action = {
        type: ACTION_TYPES.setFilters,
        payload: {
          filters: {
            '21312_2018': ["2"]
          }
        }
      };
      const actual = filters(state, action);

      expect(actual['21312_2018'].length).toBe(2);
      expect(actual['21312_2018']).toEqual(expect.arrayContaining(["1", "2"]));
    });

    it('should add new filters if filterKey does not exist', () => {
      const state = {
        '21312_2018': ["1", "2"]
      };
      const action = {
        type: ACTION_TYPES.setFilters,
        payload: {
          filters: {
            '546_2018': ["3"]
          }
        }
      };
      const actual = filters(state, action);
      expect(actual['21312_2018']).toBeDefined();
      expect(actual['546_2018']).toBeDefined();
      expect(actual['21312_2018']).toEqual(expect.arrayContaining(["1", "2"]));
      expect(actual['546_2018']).toEqual(expect.arrayContaining(["3"]));
    });
  });
});
