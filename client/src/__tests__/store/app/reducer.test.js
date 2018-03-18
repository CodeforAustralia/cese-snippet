/* global describe, it, expect */
import AppReducer from 'store/app/reducer';
import STATE from '__mocks__/sampleState';

describe('App Reducer', () => {
  it('should return equivalent state when any action is run.', () => {
    const state = STATE.app;
    expect(AppReducer(state, {type:'*'})).toBe(state);
  });
});
