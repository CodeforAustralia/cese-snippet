// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  "appliedPrograms": [
    {
      "id": "1",
      "programId": "1",
      "name": "Our Program 1",
      "schoolId": "21312",
      "facilitators": ["T8756"],
      "yearGroups": ["7", "8"],
      "dateYear": "2018",
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

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const mockApi = (path) => {
  switch (path) {
    case '/schools':
      return delay(500).then(() => {
        return fakeDatabase.schools;
      });

    case '/appliedPrograms':
      return delay(500).then(() => {
        return fakeDatabase.appliedPrograms;
      });

    case '/programs':
      return delay(500).then(() => {
        return fakeDatabase.programs;
      });

    default:
      throw new Error('That mockApi request is not handled.');
  }
};

export default mockApi;
