import { connect } from 'react-redux';
import get from 'lodash/get';

import { fetchSession } from 'store/session/actionCreators';
import { fetchSessionUser } from 'store/staff/actionCreators';
import {
  selectSession,
  selectIsFetching as selectIsFetchingSession,
} from 'store/session/selectors';
import {
  selectStaffMember,
  selectIsFetching as selectIsFetchingStaff,
} from "store/staff/selectors";

export const mapStateToProps = (state) => {
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'id', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  const _isFetchingSession = selectIsFetchingSession(state);
  const _isFetchingStaff = selectIsFetchingStaff(state);

  return {
    session,
    sessionUser,
    isFetchingSessionUser: _isFetchingSession && _isFetchingStaff,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSession: () => dispatch(fetchSession()),
    fetchSessionUser: () => dispatch(fetchSessionUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
