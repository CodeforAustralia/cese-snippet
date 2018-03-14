/* global describe, it, expect */
import SessionReducer from './reducer';
import STATE from 'sampleState';

describe('Session Reducer', () => {
  it('should return equivalent state when any action is run.', () => {
    expect(SessionReducer(STATE, {type:'*'})).toBe(STATE);
  });
});
