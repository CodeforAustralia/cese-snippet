import { connect } from 'react-redux';

import {
  fetchByFilter as fetchProgramsByFilter,
} from "store/programs/actionCreators";
import {
  selectProgramsByFilter,
  selectIsFetching as selectIsFetchingPrograms,
} from "store/programs/selectors";
import { selectSessionUser } from "store/sessionUser/selectors";

export const mapStateToProps = (state, ownProps) => {

  const year = '2018';
  const sessionUser = selectSessionUser(state);

  const schoolCode = sessionUser.schools[0];

  const filteredPrograms = selectProgramsByFilter(state, { schoolCode, year });

  return {
    schoolCode,
    // programId,
    year,
    programs: filteredPrograms,
    isFetchingPrograms: selectIsFetchingPrograms(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProgramsByFilter: (filterProps) => dispatch(fetchProgramsByFilter({
      schoolCode: filterProps.schoolCode,
      year: filterProps.year,
    })),
    onSubmitSuccess: () => console.log('wooooooo hoo'),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
