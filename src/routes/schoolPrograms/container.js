import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import {
  fetchByFilter as fetchProgramsByFilter,
} from "store/programs/actionCreators";
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchools,
  selectErrorMessage as selectErrorMessageSchools,
} from "store/schools/selectors";
import {
  selectProgramsByFilter,
  selectIsFetchingByFilter as selectIsFetchingProgramsByFilter,
  selectErrorMessage as selectErrorMessagePrograms,
} from "store/programs/selectors";
// import { sortByDateCreated } from "store/programs/helpers";

export const mapStateToProps = (state, ownProps) => {
  const { schoolCode, year } = ownProps.match.params;
  const filterProps = { schoolCode, year };

  const school = selectSchool(state, schoolCode);
  const filteredPrograms = selectProgramsByFilter(state, filterProps);

  return {
    school,
    programs: filteredPrograms, // sortByDateCreated(filteredPrograms),
    filterProps,
    isFetchingSchools: selectIsFetchingSchools(state),
    isFetchingPrograms: selectIsFetchingProgramsByFilter(state, filterProps),
    errorSchools: selectErrorMessageSchools(state),
    errorPrograms: selectErrorMessagePrograms(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { schoolCode, year } = ownProps.match.params;
  return {
    fetchSchool: () => dispatch(fetchSchool(schoolCode)),
    fetchProgramsByFilter: (filterProps) => dispatch(fetchProgramsByFilter({
      schoolCode: filterProps && filterProps.schoolCode || schoolCode,
      year: filterProps && filterProps.year || year,
    })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
