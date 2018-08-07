import { connect } from 'react-redux';

import {
  fetchByFilter as fetchProgramsByFilter,
} from "store/programs/actionCreators";
import {
  selectProgramsByFilter,
  selectIsFetching as selectIsFetchingPrograms,
} from "store/programs/selectors";
import { selectSessionUser } from "store/sessionUser/selectors";
import { makeProgramOptions } from 'store/programs/helpers';

export const mapStateToProps = (state) => {

  const year = '2018';
  const sessionUser = selectSessionUser(state);

  const schoolCode = sessionUser.schools[0];

  const filteredPrograms = selectProgramsByFilter(state, { schoolCode, year });

  return {
    schoolCode,
    // programId, // if programId, don't supply programs
    year,
    programs: filteredPrograms,
    isFetchingPrograms: selectIsFetchingPrograms(state),
    makeProgramOptions,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProgramsByFilter: (filterProps) => dispatch(fetchProgramsByFilter({
      schoolCode: filterProps.schoolCode,
      year: filterProps.year,
    })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
