import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

export const fakeDatabase = {
  "appliedPrograms": [
    {
      "id": 1,
      "programId": 1,
      "name": "Mars Program 1",
      "schoolCode": 21312,
      "facilitators": [ 8787 ],
      "yearGroups": ["7", "8"],
      "year": "2018",
      "termStart": 3,
      "termEnd": 4,
      "cohortSize": 120,
      "lastUpdatedBy": 8787,
      "lastUpdated": "2018-02-04T23:56:38.363Z"
    },
    {
      "id": 2,
      "programId": 1,
      "name": "Jupiter Program 1",
      "schoolCode": 76862,
      "facilitators": [ 23423 ],
      "yearGroups": ["7", "8"],
      "year": "2018",
      "termStart": 3,
      "termEnd": 4,
      "cohortSize": 160,
      "lastUpdatedBy": 23423,
      "lastUpdated": "2018-03-04T23:56:38.363Z"
    },
    {
      "id": 3,
      "programId": 1,
      "name": "Jupiter Program 2",
      "schoolCode": 76862,
      "facilitators": [ 23423 ],
      "yearGroups": ["7", "8"],
      "year": "2017",
      "termStart": 1,
      "termEnd": 4,
      "cohortSize": 30,
      "lastUpdatedBy": 23423,
      "lastUpdated": "2017-03-04T23:56:38.363Z"
    }
  ],
  "programs": [
    {
      "id": 1,
      "name": "Program 1",
      "description": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      "category": "Literacy",
      "curriculumBased": true
    }
  ],
  "schools": [
    {
      "code": 21312,
      "name": "Mars High School",
      "type": "Secondary",
    },
    {
      "code": 76862,
      "name": "Jupiter High School",
      "type": "Secondary",
    }
  ]
};

const delay = (ms = process.env.NODE_ENV === 'test' ? 0 : 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));


const mockApi = (path, payload) => {

  // one school
  if (path.startsWith('/schools/')) {
    return delay().then(() => {
      const code = path.replace(/\/schools\/(.*)/i, '$1');
      if (!code) {
        throw new Error(`No code present: ${code}.`);
      }
      return {
        data: {
          school: fakeDatabase.schools.find(s => {
            return Number(s.code) === Number(code);
          }),
        }
      };
    });
  }
  // many schools (id is code)
  if (path.startsWith('/schools?')) {
    return delay().then(() => {
      const searchParams = path.replace(/\/schools(.*)/i, '$1');
      const params = queryString.parse(searchParams);
      const { code } = params;

      if (!code) {
        throw new Error(`No code present: ${code}.`);
      }
      const resp = {
        data: {
          schools: null,
        }
      };
      if (Array.isArray(code)) {
        resp.data.schools = code.map(c => {
          return fakeDatabase.schools.find(s => Number(s.code) === Number(c));
        });
      } else {
        resp.data.schools = [fakeDatabase.schools.find(s => {
          return Number(s.code) === Number(code);
        })];
      }
      return resp;
    });
  }
  // all schools
  if (path.startsWith('/schools')) {
    return delay().then(() => {
      const resp = {
        data: {
          schools: fakeDatabase.schools,
        }
      };
      return resp;
    });
  }


  // one appliedPrograms
  if (path.startsWith('/appliedPrograms/')) {
    return delay().then(() => {
      const id = path.replace(/\/appliedPrograms\/(.*)/i, '$1');
      if (!id) {
        throw new Error(`No id present: ${id}.`);
      }
      return {
        data: {
          appliedProgram: fakeDatabase.appliedPrograms.find(s => {
            return Number(s.id) === Number(id);
          }),
        }
      };
    });
  }
  // many appliedPrograms
  // filtered appliedPrograms
  if (path.startsWith('/appliedPrograms?')){
    return delay().then(() => {
      const searchParams = path.replace(/\/appliedPrograms(.*)/i, '$1');
      const params = queryString.parse(searchParams);
      const { id, schoolCode, year } = params;

      if (isEmpty(params)) {
        throw new Error(`No params present: ${JSON.stringify(params)}.`);
      }

      const resp = {
        data: {
          appliedPrograms: null,
        }
      };

      if (typeof id !== 'undefined') {
        if (Array.isArray(id)) {
          resp.data.appliedPrograms = id.map(c => {
            return fakeDatabase.appliedPrograms.find(p => Number(p.id) === Number(id));
          });
        } else {
          resp.data.appliedPrograms = [fakeDatabase.appliedPrograms.find(p => {
            return Number(p.id) === Number(id);
          })];
        }
        return resp;
      }

      resp.data.appliedPrograms = fakeDatabase.appliedPrograms.filter(p => {
        if (typeof schoolCode !== 'undefined') {
          if (Number(p.schoolCode) !== Number(schoolCode)) {
            return false;
          }
        }
        if (typeof year !== 'undefined') {
          if (p.year !== year) {
            return false;
          }
        }
        return true;
      });
      return resp;
    });
  }
  // all appliedPrograms
  if (path.startsWith('/appliedPrograms')) {
    return delay().then(() => {
      const resp = {
        data: {
          appliedPrograms: fakeDatabase.appliedPrograms,
        }
      };
      return resp;
    });
  }


  // one programs
  if (path.startsWith('/programs/')) {
    return delay().then(() => {
      const id = path.replace(/\/programs\/(.*)/i, '$1');
      if (!id) {
        throw new Error(`No id present: ${id}.`);
      }
      return {
        data: {
          program: fakeDatabase.programs.find(p => {
            return Number(p.id) === Number(id);
          }),
        }
      };
    });
  }
  // many programs
  if (path.startsWith('/programs?')) {
    throw new Error('not implemented');
  }
  // all programs
  if (path.startsWith('/programs')) {
    return delay().then(() => {
      const resp = {
        data: {
          programs: fakeDatabase.programs,
        }
      };
      return resp;
    });
  }


  throw new Error(`Mock API request is not handled for path: ${path}`);
};

export default mockApi;
