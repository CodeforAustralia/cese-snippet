/* global it, describe, expect */

import {
  selectProgram,
  selectPrograms,
  selectProgramsByFilterKey,
} from 'store/programs/selectors';
import sampleState from '__mocks__/sampleState';

describe('Programs Selectors', () => {
  describe('selectProgram', () => {
    it('should return a program', () => {
      const actual = selectProgram(sampleState, '2');
      expect(actual).toBeDefined();
      expect(actual.id).toBe('2');
    });
  });


  describe('selectPrograms', () => {
    const actual = selectPrograms(sampleState, ['1','2']);
    expect(actual.length).toBe(2);
    expect(actual.map(p => p.id)).toEqual(expect.arrayContaining(['1','2']));
  });


  describe('selectProgramsByFilterKey', () => {
    const actual = selectProgramsByFilterKey(sampleState, "21312_2018");
    const expectedIds = sampleState.programs.filters["21312_2018"].ids;
    expect(actual.map(p => p.id)).toEqual(expect.arrayContaining(expectedIds));
  });
});
