import { connect } from 'react-redux';
import get from 'lodash/get';

import { selectSession } from 'store/session/selectors';
import { selectStaffMember } from "store/staff/selectors";

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated } = ownProps;
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'id', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  return {
    isAuthenticated,
    session,
    sessionUser,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    history,
    signout,
  } = ownProps;
  return {
    handleSignOut: () => signout(() => {
      history.push("/");
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
