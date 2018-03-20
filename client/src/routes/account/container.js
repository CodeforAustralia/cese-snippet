import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';

export const mapStateToProps = (state) => {
  return {
    session: selectSession(state),
    userSchoolCodes: selectUserSchoolCodes(state),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
