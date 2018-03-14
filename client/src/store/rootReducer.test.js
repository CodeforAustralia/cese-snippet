/* global expect, describe, it */
import RootReducer from './rootReducer';
import STATE from 'sampleState';

describe('RootReducer', () => {
  it('should return equivalent state when any action is run.', () => {
    expect(RootReducer(STATE, {type:'*'})).toBe(STATE);
  });
});
