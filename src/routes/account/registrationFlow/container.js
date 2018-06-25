import { connect } from 'react-redux';
import get from 'lodash/get';

import { selectSession } from 'store/session/selectors';
import { selectStaffMember } from "store/staff/selectors";
import { getSchoolCodes } from 'store/staff/helpers';
import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
  selectErrorMessage as selectErrorMessageSchools,
} from 'store/schools/selectors';


const mapStateToProps = (state, ownProps) => {
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'id', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  const userSchoolCodes = getSchoolCodes(sessionUser);
  return {
    userSchoolCodes,
    isFetchingSchools: selectIsFetchingSchools(state),
    errorMessageSchools: selectErrorMessageSchools(state),
    schools: selectSchools(state, userSchoolCodes),
    onSubmitSuccess: (resp) => {
      console.log(resp);
      // navigate to account
      ownProps.history.push('/account');
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
