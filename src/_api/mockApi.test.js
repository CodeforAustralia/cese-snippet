/* global describe, it, expect */
import mockApi, { fakeDatabase } from './index';

describe('mockApi', () => {

  describe('Schools', () => {
    it('should fetch all Schools', () => {
      expect.assertions(2);
      return mockApi('/schools').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.schools.length);
      });
    });

    it('should fetch a single School', () => {
      expect.assertions(2);
      return mockApi('/schools/76862').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        const school = data[0];
        expect(school.code).toBe(76862);
      });
    });

  });

  describe('AppliedPrograms', () => {
    it('should fetch all Applied Programs', () => {
      expect.assertions(2);
      return mockApi('/appliedPrograms').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.appliedPrograms.length);
      });
    });

    it('should fetch a single Applied Program', () => {
      expect.assertions(2);
      return mockApi('/appliedPrograms/2').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        const appliedProgram = data[0];
        expect(appliedProgram.id).toBe(2);
      });
    });
  });


  describe('Programs', () => {
    it('should fetch all Programs', () => {
      expect.assertions(2);
      return mockApi('/programs').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        expect(data.length).toEqual(fakeDatabase.programs.length);
      });
    });

    it('should fetch a single Program', () => {
      expect.assertions(2);
      return mockApi('/programs/1').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data } = resp;
        const program = data[0];
        expect(program.id).toBe(1);
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
