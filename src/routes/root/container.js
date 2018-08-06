import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';
import { selectSessionUser } from 'store/sessionUser/selectors';

export const mapStateToProps = (state) => {
  const session = selectSession(state);
  const sessionUser = selectSessionUser(state);
  return {
    session,
    sessionUser,
  }
};

export default connect(mapStateToProps);
