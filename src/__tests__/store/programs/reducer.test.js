/* global it, describe, expect */
import {
  ACTION_TYPES,
  filters,
} from 'store/programs/reducer';

describe('Programs Reducer', () => {

  describe('createFilters', () => {

    it('should replace filter if filterKey exists', () => {
      const state = {
        '21312_2018': ["1", "2"]
      };
      const action = {
        type: ACTION_TYPES.createFilters,
        payload: {
          filterKey: "21312_2018",
          filterValue: ["3"],
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
        type: ACTION_TYPES.createFilters,
        payload: {
          filterKey: "78672_2018",
          filterValue: ["3"],
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
