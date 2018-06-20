import { connect } from 'react-redux';
import { createProgram } from 'store/programs/actionCreators';
// import { fetchProgramTemplates } from 'store/programTemplates/actionCreators';
// import {
//   selectIsFetching as selectIsFetchingProgramTemplates,
//   selectProgramTemplate,
//   selectProgramTemplates
// } from 'store/programTemplates/selectors';
import { selectSession } from "store/session/selectors";
import { selectSchools } from "store/schools/selectors";
import { selectCms } from "store/cms/selectors";
import { getYear } from 'helpers/dateFormats';

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const cmsProps = selectCms(state);
  const session = selectSession(state);
  const schools = selectSchools(state, session.schools);
  const initialFormState = location.state && location.state.initialFormState || {};
  const year = location.state && location.state.year || getYear();

  let school;

  const newInitialFormState = {
    ...initialFormState,

    // "name": "test",
    //
    // "category": "Curriculum Engagement",
    // "subCategory": "Literacy",
    // "aims": "L3 is a whole-class intervention that aims to reduce the\nrisk of students not achieving expected literacy levels by\nthe end of their first year of schooling.",
    // "description": "L3 is a research-based Kindergarten classroom\nintervention, targeting text reading and writing. It provides\nrich literacy experiences through systematic and explicit\nteaching. It complements the daily literacy program.\nStudents participate in reading and writing lessons in small\ngroups, designed to meet their specific learning needs.\nThey also engage in short periods of independent,\nindividual or group tasks to practice and consolidate their\ncurrent literacy learning. This occurs in the classroom\nwithin the daily literacy session.",
    // "descriptionFull": null,
    // "website": "https://education.nsw.gov.au/teaching-and-learning/curriculum/literacy-and-numeracy/literacy/Language,-Learning-and-Literacy",
    // "participantGroups": [
    //   "Students"
    // ],
    // "participantGroupsDescription": null,
    // "focusGroup": "Refugee",
    // "focusGroupOther": null,
    // "yearLevels": [
    //   "K",
    //   "1",
    //   "2",
    //   "3",
    //   "4",
    //   "5",
    //   "6"
    // ],
    // "cohortSize": 20,
    // "deliveredByType": "School Staff",
    // "externalProvider": 'maccas',
    // "staff": [
    //   "37171",
    //   "37172"
    // ],
    // "year": 2018,
    // "terms": [
    //   1,
    //   2
    // ],
    // "tags": [
    //   "reading",
    //   "writing",
    //   "vocabulary"
    // ],

    createdBy: session.id,
  };

  if (typeof newInitialFormState.code === 'undefined') {
    if (schools.length === 1) {
      school = schools[0];
      newInitialFormState.code = school.code;
    }
  } else {
    school = schools.find(s => s.code === newInitialFormState.code);
  }

  return {
    school,
    schools,
    year,

    cmsProps,

    isEdit: false,

    initialFormState: newInitialFormState,

    // programTemplates: selectProgramTemplates(state),
    // isFetchingProgramTemplates: selectIsFetchingProgramTemplates(state),
    // selectProgramTemplate: (id) => selectProgramTemplate(state, id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchProgramTemplates: () => dispatch(fetchProgramTemplates()),
    onSubmit: (values) => dispatch(createProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
