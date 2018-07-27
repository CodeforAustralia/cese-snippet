import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';
import { selectSessionUser } from "store/sessionUser/selectors";

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated } = ownProps;
  const session = selectSession(state);
  const sessionUser = selectSessionUser(state);
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
