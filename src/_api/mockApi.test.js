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


  // // one programs
  // '/programs/1
  // // many programs
  // // filtered programs
  // '/programs?id=1&id=2
  // // all programs
  // '/programs'
  describe('Programs', () => {
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
      return mockApi('/programs/2').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { programs } } = resp;
        expect(programs.length).toBe(1);
        const program = programs[0];
        expect(program.id).toBe(2);
      });
    });

    it('should fetch a single Program by id', () => {
      expect.assertions(3);
      return mockApi('/programs?id=2').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { programs } } = resp;
        expect(programs.length).toBe(1);

        const program = programs[0];
        expect(program.id).toBe(2);
      });
    });

    it('should fetch Programs by filters', () => {
      expect.assertions(4);
      return mockApi('/programs?schoolCode=76862&year=2018').then((resp) => {
        expect(resp.data).toBeDefined();
        const { data: { programs } } = resp;
        expect(Array.isArray(programs)).toBe(true);

        // assume array length
        const program = programs[0];
        expect(program.schoolCode).toBe(76862);
        expect(program.year).toBe("2018");
      });
    });

  });

});

