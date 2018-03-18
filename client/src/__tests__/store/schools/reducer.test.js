/* global describe, it, expect */
import SchoolsReducer, {
  ACTION_TYPES,
  isFetching,
  errorMessage,
  byCode,
} from 'store/schools/reducer';
import STATE from '__mocks__/sampleState';

describe('Schools Reducer', () => {

  describe('SchoolsReducer', () => {
    const initialState = STATE.schools;

    it('should return equivalent state when a foreign action is run.', () => {
      expect(SchoolsReducer(initialState, {type:'*', payload:{}})).toBe(initialState);
    });

    describe('isFetching', () => {
      it('should set isFetching state to true when is fetching.', () => {
        const requestState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchRequest, payload:{}});
        expect(requestState.isFetching).toBe(true);
      });

      it('should set isFetching state to false when is completed fetching.', () => {
        const successState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchSuccess, payload:{}});
        expect(successState.isFetching).toBe(false);
        const errorState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchError, payload:{message:''}});
        expect(errorState.isFetching).toBe(false);
      });
    });

    describe('errorMessage', () => {
      it('should set errorMessage to that supplied when is in error', () => {
        const message = 'Lorem ipsum';
        const errorState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchError, payload:{message: message}});
        expect(errorState.errorMessage).toBe(message);
      });

      it('should clear errorMessage if not in error', () => {
        const requestState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchRequest, payload:{}});
        expect(requestState.errorMessage).toBeNull();
        const successState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchSuccess, payload:{}});
        expect(successState.errorMessage).toBeNull();
      });
    });

    describe('byCode', () => {
      it('should append a new school to group if it does not exist', () => {
        expect(initialState.byCode["123"]).not.toBeDefined();
        const actual = SchoolsReducer(initialState, {
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: {
              "123": {code: "123"},
            }
          }
        });
        expect(Object.keys(actual.byCode).length).toBe(Object.keys(initialState.byCode).length + 1);
        expect(actual.byCode["123"]).toBeDefined();
      });

      it('should modify an existing school in group if it exists', () => {
        expect(initialState.byCode["21312"]).toBeDefined();
        const actual = SchoolsReducer(initialState, {
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: {
              "21312": { code: "21312", name: 'zebra-express' },
            }
          }
        });
        expect(Object.keys(actual.byCode).length).toBe(Object.keys(initialState.byCode).length);
        expect(actual.byCode["21312"].name).toBe('zebra-express');
      });
    });
  });


});
