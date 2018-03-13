/* global describe, it, expect */
import AppReducer from './reducer';

describe('App Reducer', () => {
  it('should return equivalent state when any action is run.', () => {
    const state = {a:1,b:2,c:{d:'a',e:{f:'b'}}};
    expect(AppReducer(state, {type:'*'})).toBe(state);
  });
});
