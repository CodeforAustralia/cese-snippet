import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';

const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  return {
    session: selectSession(state),
    userFirstSchoolCode: userSchoolCodes[0],
    userSchoolCodes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (schoolCodes) => dispatch(fetchSchools(schoolCodes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
