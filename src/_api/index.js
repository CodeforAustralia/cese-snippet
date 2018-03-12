// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  "appliedPrograms": [
    {
      "id": "1",
      "programId": "1",
      "name": "Our Program 1",
      "schoolCode": "21312",
      "facilitators": ["T8756"],
      "yearGroups": ["7", "8"],
      "year": "2018",
      "termStart": 3,
      "termEnd": 4,
      "cohortSize": 120,
      "desiredOutcomes": "Student uplift in the history of the classic Lorem Ipsum passage and generate your own text using any number of characters, words, sentences or paragraphs.",
      "lastUpdatedBy": "T8756",
      "lastUpdated": "2018-03-04T23:56:38.363Z"
    }
  ],
  "programs": [
    {
      "id": "1",
      "name": "Program 1",
      "description": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
      "category": "Literacy",
      "curriculumBased": true
    }
  ],
  "schools": [
    {
      "id": "1",
      "code": "21312",
      "name": "Mars High School",
      "type": "Secondary",
      "programs": ["1"]
    }
  ]
};

const delay = (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));

const mockApi = (path, payload) => {
  const { codes, year } = payload;

  switch (path) {
    case '/schools':
      if (codes) {
        return delay().then(() => {
          return codes.map(code => {
            return fakeDatabase.schools.find(school => school.code === code);
          });
        });
      }
      return delay().then(() => {
        return fakeDatabase.schools;
      });

    case '/appliedPrograms':
      if (codes) {
        return delay().then(() => {
          return codes.map(code => {
            return fakeDatabase.appliedPrograms.find(program => {
              if (program.schoolCode === code) {
                if (year) {
                  return program.year === year;
                } else {
                  return program;
                }
              }
              return false;
            });
          });
        });
      }
      return delay().then(() => {
        return fakeDatabase.appliedPrograms.filter(program => {
          if (year) {
            return program.year === year;
          }
          return program;
        });
      });

    case '/programs':
      return delay().then(() => {
        return fakeDatabase.programs;
      });

    default:
      throw new Error(`Mock API request is not handled for path: ${path}`);
  }
};

export default mockApi;
