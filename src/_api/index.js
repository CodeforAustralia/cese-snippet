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

const delay = (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));


const mockApi = (path, payload) => {

  // one school
  if (path.startsWith('/schools/')) {
    return delay().then(() => {
      const s = fakeDatabase.schools.find(s => s.code === payload.code);
      return { data: [s] }
    });
  }
  // many schools (id is code)
  if (path.startsWith('/schools?')) {
    return delay().then(() => {

      // todo
      const { codes } = payload;

      const data = codes.map(code => {
        return fakeDatabase.schools.find(s => s.code === code);
      });
      return { data };
    });
  }
  // all schools
  if (path.startsWith('/schools')) {
    return delay().then(() => {
      return { data: fakeDatabase.schools }
    });
  }


  // one appliedPrograms
  if (path.startsWith('/appliedPrograms/')) {
    throw new Error('not implemented');
  }
  // many appliedPrograms
  // filtered appliedPrograms
  if (path.startsWith('/appliedPrograms?')){
    return delay().then(() => {
      const { code, year } = payload;
      const data = fakeDatabase.appliedPrograms.filter(program => {
        return program.schoolCode === code;
      }).filter(program => {
        return program.year === year;
      });
      return { data };
    });
  }
  // all appliedPrograms
  if (path.startsWith('/appliedPrograms')) {
    return delay().then(() => {
      return { data: fakeDatabase.appliedPrograms };
    });
  }


  // one programs
  if (path.startsWith('/programs/')) {
    throw new Error('not implemented');
  }
  // many programs
  if (path.startsWith('/programs?')) {
    throw new Error('not implemented');
  }
  // all programs
  if (path.startsWith('/programs')) {
    return delay().then(() => {
      return { data: fakeDatabase.programs };
    });
  }


  throw new Error(`Mock API request is not handled for path: ${path}`);
};

export default mockApi;
