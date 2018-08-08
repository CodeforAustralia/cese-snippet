import { connect } from 'react-redux';

import {
  fetchByFilter as fetchProgramsByFilter,
} from "store/programs/actionCreators";
import {
  selectProgramsByFilter,
  selectIsFetchingByFilter as selectIsFetchingProgramsByFilter,
} from "store/programs/selectors";
import { selectSessionUser } from "store/sessionUser/selectors";
import { createSnippet } from 'store/snippets/actionCreators';
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchool,
} from "store/schools/selectors";
import { fetchSchool } from "store/schools/actionCreators";


export const mapStateToProps = (state) => {
  const sessionUser = selectSessionUser(state);
  const schoolCode = sessionUser.schools[0];
  const filterProps = { schoolCode: schoolCode, year: '2018' };

  const school = selectSchool(state, schoolCode);
  const filteredPrograms = selectProgramsByFilter(state, filterProps);
  const isFetchingPrograms = selectIsFetchingProgramsByFilter(state, filterProps);

  return {
    schoolCode,
    year: filterProps.year, // todo
    school,
    isFetchingSchool: selectIsFetchingSchool(state),
    programs: filteredPrograms,
    isFetchingPrograms,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchProgramsByFilter: ({ schoolCode, year }) => dispatch(fetchProgramsByFilter({
      schoolCode,
      year,
    })),
    onSubmit: (snippet) => dispatch(createSnippet(snippet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
