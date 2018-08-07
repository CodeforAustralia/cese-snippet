import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';
import { selectSessionUser } from 'store/sessionUser/selectors';
import { selectIsFetching as selectIsFetchingUser } from 'store/users/selectors';

export const mapStateToProps = (state) => {
  const session = selectSession(state);
  const sessionUser = selectSessionUser(state);
  return {
    session,
    sessionUser,
    isFetchingUser: selectIsFetchingUser(state),
  }
};

export default connect(mapStateToProps);
