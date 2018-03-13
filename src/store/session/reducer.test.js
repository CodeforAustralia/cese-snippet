/* global describe, it, expect */
import SessionReducer from './reducer';

describe('Session Reducer', () => {
  it('should return equivalent state when any action is run.', () => {
    const state = {a:1,b:2,c:{d:'a',e:{f:'b'}}};
    expect(SessionReducer(state, {type:'*'})).toBe(state);
  });
});
