// raw data
const schema = {
  app: {  // provided from reducer initial state
    name: 'Snippet',
    flags: {},
    viewport: {
      width: null,
      height: null,
      type: null,
    },
  },
  "session": {  // provided on window.__INITIAL_STATE__
    id: 8787,
    first: "First",
    last: "Last",
    email: "first.last@det.nsw.edu.au",
    schools: [21312],
    programsCreated: [1],
    programsFacilitated: [1],
  },
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
      "lastUpdatedBy": "T8756",
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
      "id": 1,
      "code": 21312,
      "name": "Mars High School",
      "type": "Secondary",
      "programs": [1]
    }
  ]
};
