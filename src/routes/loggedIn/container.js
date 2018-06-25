import { connect } from 'react-redux';
import get from 'lodash/get';

import { selectSession } from "store/session/selectors";
import { selectStaffMember } from "store/staff/selectors";

const mapStateToProps = (state) => {
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'staffId', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  return {
    sessionUser,
  }
};

export default connect(mapStateToProps);
