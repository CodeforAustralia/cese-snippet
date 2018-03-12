// State once raw data is transformed through reducer
const state = {
  app: {
    name: 'Snippet',
    flags: {},
    viewport: {
      width: null,
      height: null,
      type: null,
    },
  },
  "session": {
    id: "T8756",
    first: "First",
    last: "Last",
    email: "first.last@det.nsw.edu.au",
    schools: ["21312"],
    programsCreated: ["1"],
    programsFacilitated: ["1"],
  },
  "schools": {
    isFetching: false,
    errorMessage: null,
    "byId": {
      "21312": {
        "id": "1",
        "code": "21312",
        "name": "Mars High School",
        "type": "Secondary",
        "programs": ["1"]
      }
    }
  },
  "appliedPrograms": {
    isFetching: false,
    errorMessage: null,
    "byId": {
      "1": {
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
    },
    "filters": {
      "key1": {
        schoolCode: "21312",
        year: "2018",
        ids: [],
      },
    }
  },
  "programs": {
    isFetching: false,
    errorMessage: null,
    "byId": {
      "1": {
        "id": "1",
        "name": "Program 1",
        "description": "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        "category": "Literacy",
        "curriculumBased": true
      }
    }
  }
};
