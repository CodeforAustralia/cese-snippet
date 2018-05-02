import { connect } from 'react-redux';
import { fetchSchools } from "store/schools/actionCreators";
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchools,
} from "store/schools/selectors";
import { selectSession } from "store/session/selectors";
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
    session: selectSession(state),
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
    fetchSchools: (codes) => { // get all of their schools, in case they have more than 1
      return dispatch(fetchSchools(codes));
    },
    fetchProgramsByFilter: (filterProps) => dispatch(fetchProgramsByFilter({ code, year })),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
