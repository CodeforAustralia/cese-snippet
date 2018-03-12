/* global describe, it, expect */
import mockApi, { fakeDatabase } from './index';

describe('mockApi', () => {

  describe('Schools', () => {
    it('should fetch all Schools', () => {
      expect.assertions(1);
      return mockApi('/schools').then((resp) => {
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.schools.length);
      });
    });
  });

  describe('AppliedPrograms', () => {
    it('should fetch all Applied Programs', () => {
      expect.assertions(1);
      return mockApi('/appliedPrograms').then((resp) => {
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.appliedPrograms.length);
      });
    });
  });

  describe('Programs', () => {
    it('should fetch all Programs', () => {
      expect.assertions(1);
      return mockApi('/programs').then((resp) => {
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.programs.length);
      });
    });
  });

});



// '/schools/1'
// // many schools (id is code)
// '/schools?id=1&id=2'
// // all schools
// '/schools'
//
// // one appliedPrograms
// '/appliedPrograms/1
// // many appliedPrograms
// // filtered appliedPrograms
// '/appliedPrograms?id=1&id=2
// // all appliedPrograms
// '/appliedPrograms'
//
// // one programs
// '/programs/1'
// // many programs
// '/programs?id=1&id=2'
// // all programs
// '/programs'
