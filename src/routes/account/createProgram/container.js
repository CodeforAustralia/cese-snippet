import { connect } from 'react-redux';
import get from 'lodash/get';

import { selectSession } from 'store/session/selectors';
import { selectStaffMember } from "store/staff/selectors";
import { getSchoolCodes } from 'store/staff/helpers';

const mapStateToProps = (state) => {
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'id', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  const userSchoolCodes = getSchoolCodes(sessionUser);

  return {
    sessionUser,
    userSchoolCodes,
  }
};

export default connect(mapStateToProps);
