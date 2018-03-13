/* global describe, it, expect */
import mockApi, { fakeDatabase } from './index';

describe('mockApi', () => {

  // // one school
  // '/schools/1'
  // // many schools (id is code)
  // '/schools?code=1&code=2'
  // // all schools
  // '/schools'

  describe('Schools', () => {
    it('should fetch all Schools', () => {
      expect.assertions(2);
      return mockApi('/schools').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { schools } } = resp;
        expect(schools.length).toEqual(fakeDatabase.schools.length);
      });
    });

    it('should fetch a single School', () => {
      expect.assertions(3);
      return mockApi('/schools/76862').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { schools } } = resp;
        expect(schools.length).toBe(1);
        const school = schools[0];
        expect(school.code).toBe(76862);
      });
    });

    it('should fetch a single school by school code', () => {
      expect.assertions(3);
      return mockApi('/schools?code=76862').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { schools } } = resp;
        expect(schools.length).toBe(1);

        const school = schools[0];
        expect(school.code).toBe(76862);
      });
    });

    it('should fetch many schools by school code', () => {
      expect.assertions(4);
      return mockApi('/schools?code=76862&code=21312').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { schools } } = resp;
        expect(schools.length).toBe(2);

        expect(schools[0].code).toBe(76862);
        expect(schools[1].code).toBe(21312);
      });
    });
  });


  // // one appliedPrograms
  // '/appliedPrograms/1
  // // many appliedPrograms
  // // filtered appliedPrograms
  // '/appliedPrograms?id=1&id=2
  // // all appliedPrograms
  // '/appliedPrograms'
  describe('AppliedPrograms', () => {
    it('should fetch all Applied Programs', () => {
      expect.assertions(2);
      return mockApi('/appliedPrograms').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { appliedPrograms } } = resp;
        expect(appliedPrograms.length).toEqual(fakeDatabase.appliedPrograms.length);
      });
    });

    it('should fetch a single Applied Program', () => {
      expect.assertions(3);
      return mockApi('/appliedPrograms/2').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { appliedPrograms } } = resp;
        expect(appliedPrograms.length).toBe(1);
        const appliedProgram = appliedPrograms[0];
        expect(appliedProgram.id).toBe(2);
      });
    });

    it('should fetch a single Applied Program by id', () => {
      expect.assertions(3);
      return mockApi('/appliedPrograms?id=2').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { appliedPrograms } } = resp;
        expect(appliedPrograms.length).toBe(1);

        const appliedProgram = appliedPrograms[0];
        expect(appliedProgram.id).toBe(2);
      });
    });

    it('should fetch Applied Programs by filters', () => {
      expect.assertions(4);
      return mockApi('/appliedPrograms?schoolCode=76862&year=2018').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { appliedPrograms } } = resp;
        expect(Array.isArray(appliedPrograms)).toBe(true);

        // assume array length
        const appliedProgram = appliedPrograms[0];
        expect(appliedProgram.schoolCode).toBe(76862);
        expect(appliedProgram.year).toBe("2018");
      });
    });


    // // one programs
    // '/programs/1'
    // // many programs
    // '/programs?id=1&id=2'
    // // all programs
    // '/programs'
    it('should fetch all Programs', () => {
      expect.assertions(2);
      return mockApi('/programs').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { programs } } = resp;
        expect(programs.length).toEqual(fakeDatabase.programs.length);
      });
    });

    it('should fetch a single Program', () => {
      expect.assertions(3);
      return mockApi('/programs/1').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { programs } } = resp;
        expect(programs.length).toBe(1);
        const program = programs[0];
        expect(program.id).toBe(1);
      });
    });

  });

});

