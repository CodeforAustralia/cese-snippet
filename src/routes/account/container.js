import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import { selectSchoolsByCode } from 'store/schools/selectors';

const mapStateToProps = (state, ownProps) => {
  const session = state.session;
  // const userSchoolCodes = session.schools;
  return {
    session,
    // schools: selectSchoolsByCode(state, userSchoolCodes),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSchools: (schoolCodes) => dispatch(fetchSchools(schoolCodes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);





