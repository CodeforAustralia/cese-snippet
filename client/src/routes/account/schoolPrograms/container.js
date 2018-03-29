import { connect } from 'react-redux';
import { fetchSchool } from "store/schools/actionCreators";
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchools,
} from "store/schools/selectors";
import {
  selectProgramsByFilterKey,
  selectIsFetching as selectIsFetchingPrograms,
} from "store/programs/selectors";
import {
  fetchProgramsByFilter,
} from "store/programs/actionCreators";

const mapStateToProps = (state, ownProps) => {
  const { code, year } = ownProps.match.params;
  const filterProps = { code, year };
  return {
    filterProps,
    isFetchingSchools: selectIsFetchingSchools(state),
    isFetchingPrograms: selectIsFetchingPrograms(state),
    school: selectSchool(state, code),
    filteredPrograms: selectProgramsByFilterKey(state, filterProps),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { code, year } = ownProps.match.params;
  return {
    fetchSchool: () => dispatch(fetchSchool(code)),
    fetchProgramsByFilter: (filterProps) => dispatch(fetchProgramsByFilter({ code, year })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
