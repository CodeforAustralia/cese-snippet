/* global expect, describe, it */
import RootReducer from 'store/rootReducer';
import STATE from '__mocks__/sampleState';

describe('RootReducer', () => {
  it('should return equivalent state when any action is run.', () => {
    expect(RootReducer(STATE, {type:'*'})).toBe(STATE);
  });
});
