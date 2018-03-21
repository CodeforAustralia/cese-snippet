export default {
  app: {
    name: 'Snippet',
    flags: {},
    viewport: {
      width: null,
        height: null,
        type: null
    }
  },
  session: {
    id: "8787",
    first: 'First',
    last: 'Last',
    email: 'first.last@det.nsw.edu.au',
    schools: [
      "21312"
    ],
    programsCreated: [
      "1"
    ],
    programsFacilitated: [
      "1"
    ]
  },
  programs: {
    byId: {
      '1': {
        id: "1",
        programId: "1",
        name: 'Mars Program 1',
        code: "21312",
        facilitators: [
          "8787"
        ],
        yearGroups: [
          '7',
          '8'
        ],
        year: '2018',
        termStart: 3,
        termEnd: 4,
        cohortSize: 120,
        lastUpdatedBy: "8787",
        lastUpdated: '2018-02-04T23:56:38.363Z'
      },
      '2': {
        id: "2",
        programId: "1",
        name: 'Jupiter Program 1',
        code: "76862",
        facilitators: [
          "23423"
        ],
        yearGroups: [
          '7',
          '8'
        ],
        year: '2018',
        termStart: 3,
        termEnd: 4,
        cohortSize: 160,
        lastUpdatedBy: "23423",
        lastUpdated: '2018-03-04T23:56:38.363Z'
      }
    },
    isFetching: false,
    errorMessage: null,
    filters: {
      '21312_2018': ["1", "2"]
    }
  },
  schools: {
    byCode: {
      '21312': {
        code: "21312",
        name: 'Mars High School',
        type: 'Secondary'
      }
    },
    isFetching: false,
    errorMessage: null,
  },
  programTemplates: {

  }
}
