// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  "appliedPrograms": [
    {
      "id": 1,
      "programId": 1,
      "name": "Our Program 1",
      "schoolCode": 21312,
      "facilitators": [8787],
      "yearGroups": ["7", "8"],
      "year": "2018",
      "termStart": 3,
      "termEnd": 4,
      "cohortSize": 120,
      "desiredOutcomes": "Student uplift in the history of the classic Lorem Ipsum passage and generate your own text using any number of characters, words, sentences or paragraphs.",
      "lastUpdatedBy": 8787,
      "lastUpdated": "2018-03-04T23:56:38.363Z"
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
      "programs": [1]
    }
  ]
};

const delay = (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));


const mockApi = (path, payload) => {
  // all schools
  if (path.startsWith('/schools')) {
    return delay().then(() => {
      return { data: fakeDatabase.schools }
    });
  }
  // one school
  if (path.startsWith('/schools/')) {
    return delay().then(() => {
      const s = fakeDatabase.schools.find(s => s.code === payload.code);
      return { data: [s] }
    });
  }
  // many schools (id is code)
  if (path.startsWith('/schools?')) {
    throw new Error('not implemented');
  }


  // all appliedPrograms
  if (path.startsWith('/appliedPrograms')) {
    return delay().then(() => {
      return { data: fakeDatabase.appliedPrograms };
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


  // all programs
  if (path.startsWith('/programs')) {
    return delay().then(() => {
      return { data: fakeDatabase.programs };
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


  throw new Error(`Mock API request is not handled for path: ${path}`);
};

export default mockApi;
