/* global describe, it, expect */
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';
import STATE from '__mocks__/sampleState';

describe('Session selectors', () => {

  describe('selectSession', () => {
    it('should return a session object when selected', () => {
      expect(selectSession(STATE)).toBe(STATE.session);
    });
  });

  describe('selectUserSchoolCodes', () => {
    const actual = selectUserSchoolCodes(STATE);
    expect(actual).toBe(STATE.session.schools);
    expect(Array.isArray(actual)).toBe(true);
  });

});
