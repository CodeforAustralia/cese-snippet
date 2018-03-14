/* global describe, it, expect */
import SchoolsReducer, {
  ACTION_TYPES,
  isFetching,
  errorMessage,
  byCode,
} from './reducer';
import STATE from 'sampleState';

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

      it('should clear errorMessage id not in error', () => {
        const requestState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchRequest, payload:{}});
        expect(requestState.errorMessage).toBeNull();
        const successState = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchSuccess, payload:{}});
        expect(successState.errorMessage).toBeNull();
      });
    });

    describe('byCode', () => {
      it('should append a new school to group when supplied', () => {
        const actual = SchoolsReducer(initialState, {type:ACTION_TYPES.fetchSuccess, payload:{
          schools: {
            123: { code: 123 },
          }
        }});
        console.log(actual)
        expect(Object.keys(actual).length).toBe(Object.keys(initialState).length + 1);
        expect(actual.byCode[123]).toBe({ code: 123 });
      });

      it.todo('should replace an existing school to group when supplied', () => {});
    });

  });


});
