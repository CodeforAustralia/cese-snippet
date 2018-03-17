/* global describe, it, expect */
import SessionReducer from './reducer';
import STATE from 'sampleState';

describe('Session Reducer', () => {
  it('should return equivalent state when any action is run.', () => {
    const state = STATE.session;
    expect(SessionReducer(state, {type:'*'})).toBe(state);
  });
});
