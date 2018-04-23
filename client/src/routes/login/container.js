import { connect } from 'react-redux';

import { setSession } from "store/session/actionCreators";
import { fetchStaff } from "store/staff/actionCreators";
import {
  selectStaff,
  selectStaffMember,
  selectIsFetching,
} from "store/staff/selectors";
import { selectSession } from "store/session/selectors";


const mapStateToProps = (state) => {
  return {
    session: selectSession(state),
    staff: selectStaff(state),
    isFetching: selectIsFetching(state),
    selectStaffMember: (id) => selectStaffMember(state, id)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStaff: () => dispatch(fetchStaff()),
    loginSession: (id) => dispatch(setSession(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
