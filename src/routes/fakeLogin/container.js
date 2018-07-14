import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';
import { selectStaffMember } from "store/staff/selectors";

export const mapStateToProps = (state) => {
  const session = selectSession(state);
  const sessionUser = selectStaffMember(state, session.staffId);
  return {
    sessionUser,
  }
};

export default connect(mapStateToProps);
