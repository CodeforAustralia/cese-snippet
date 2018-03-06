import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from 'store/session/selectors';

const mapStateToProps = (state) => {
  return {
    session: selectSession(state),
    userSchoolCodes: selectUserSchoolCodes(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (schoolCodes) => dispatch(fetchSchools(schoolCodes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);





