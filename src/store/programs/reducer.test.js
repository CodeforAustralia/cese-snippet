/* global it, describe, expect */
import {
  ACTION_TYPES,
  filters,
} from './reducer';

describe('Programs Reducer', () => {
  describe('Filters', () => {
    it('setFilter should update ids where a state key exists.', () => {
      const state = {
        '1': {
          ids: [],
        }
      };
      const actual = filters(state, {
        type: ACTION_TYPES.setFilter,
        payload: {
          key: '1',
          ids: [1, 2]
        }
      });
      expect(actual["1"].ids ).toEqual([1, 2]);
    });
    it('setFilter should update existing ids where a state key exists without duplicates.', () => {
      const state = {
        '1': {
          ids: [1, 2],
        }
      };
      const actual = filters(state, {
        type: ACTION_TYPES.setFilter,
        payload: {
          key: '1',
          ids: [1]
        }
      });
      expect(actual["1"].ids ).toEqual([1,2]);
    });
    it('setFilter should create a new key where a state key does not exists.', () => {
      const state = {};
      const actual = filters(state, {
        type: ACTION_TYPES.setFilter,
        payload: {
          key: '1',
          ids: [1]
        }
      });
      expect(Object.keys(actual)).toEqual(['1']);
    });
  });
});
