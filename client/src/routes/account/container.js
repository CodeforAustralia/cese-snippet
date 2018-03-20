import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import { fetchProgramsByFilters } from 'store/programs/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';
import { getDefaultYear } from "store/programs/helpers";


export const mapStateToProps = (state) => {
  const schoolCodes = selectUserSchoolCodes(state);
  const defaultCode = schoolCodes[0];
  return {
    session: selectSession(state),
    schoolCodes,
    defaultCode,
    defaultYear: getDefaultYear(),
  }
};

export const mapDispatchToProps = (dispatch) => {

  // todo question:
  // Do we really want to get all of the programs that have ever happened at my
  // school. This is slow.

  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
    fetchProgramsBySchool: (code) => dispatch(fetchProgramsByFilters({code})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
