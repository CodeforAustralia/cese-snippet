import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { fetchProgramsByFilter } from "store/programs/actionCreators";
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchools,
  selectErrorMessage as selectErrorMessageSchools,
} from "store/schools/selectors";
import {
  selectProgramsByFilterKey,
  selectIsFetching as selectIsFetchingPrograms,
  selectErrorMessage as selectErrorMessagePrograms,
} from "store/programs/selectors";


export const mapStateToProps = (state, ownProps) => {
  const { schoolCode, year } = ownProps.match.params;
  const filterProps = { schoolCode, year };

  const school = selectSchool(state, schoolCode);
  const filteredPrograms = selectProgramsByFilterKey(state, filterProps);

  return {
    school,
    programs: filteredPrograms,
    filterProps,
    isFetchingSchools: selectIsFetchingSchools(state),
    isFetchingPrograms: selectIsFetchingPrograms(state),
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
