import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';
import { selectSchools } from 'store/schools/selectors';
import { getDefaultYear } from "store/programs/helpers";


export const mapStateToProps = (state) => {
  const schoolCodes = selectUserSchoolCodes(state);
  const defaultCode = schoolCodes[0];
  const schools = selectSchools(state, schoolCodes);
  return {
    session: selectSession(state),
    schoolCodes,
    schools,
    defaultCode,
    defaultYear: getDefaultYear(),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
