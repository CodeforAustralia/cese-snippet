import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';
import { clearSession } from 'store/session/actionCreators';


const win = typeof window !== 'undefined' ? window : global;

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated } = ownProps;
  return {
    isAuthenticated,
    session: selectSession(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    history,
    signout,
  } = ownProps;
  return {
    handleSignOut: () => signout(() => {
      history.push("/logged-out");
      return dispatch(clearSession());
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
