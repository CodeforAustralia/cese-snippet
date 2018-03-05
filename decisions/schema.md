# State shape 

## Server 

```js
const INITIAL_STATE = {
  session: {
    id: "T8756",
    first: "First",
    last: "Last",
    email: "first.last@det.nsw.edu.au",
    schools: ["21312"],
    programsCreated: ["1"],
    programsFacilitated: ["1"]
  },
}
```

```js
const appliedPrograms = [
  {
    id: "1",
    programId: "1",
    name: "Our Program 1",
    schoolId: "21312",
    facilitators: ["T8756"],
    yearGroups: ["7", "8"],
    dateYear: "2018",
    termStart: 3,
    termEnd: 4,
    cohortSize: 120,
    desiredOutcomes: "Student uplift in the history of the classic Lorem Ipsum passage and generate your own text using any number of characters, words, sentences or paragraphs.",
    lastUpdatedBy: "T8756",
    lastUpdated: "2018-03-04T23:56:38.363Z",
  }
];
```

```js
// we're always going to want all of the programs available so they should be separate not nested
const programs = [
  {
    id: "1",
    name: "Program 1",
    description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
    category: "Literacy",
    curriculumBased: true,
  }
];
```

```js
const schools = [
  {
    id: "1",
    code: "21312",
    name: "Mars High School",
    type: "Secondary",
    programs: ["1"]
  }
];
```
 

## Client 

```js
const INITIAL_STATE = {
  app: {
    name: 'Snippet',
    flags: {},
    viewport: {
      width: null,
      height: null,
      type: null,
    }
  },
};
```
