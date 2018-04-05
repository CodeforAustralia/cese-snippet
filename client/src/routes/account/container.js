import { connect } from 'react-redux';
import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSchools,
  selectIsFetching
} from 'store/schools/selectors';
import {
  selectSession,
  selectUserSchoolCodes,
} from "store/session/selectors";
import {
  fetchStaffList,
  fetchProgramFields,
} from 'store/static/actionCreators';

const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);

  return {
    session: selectSession(state),
    userSchoolCodes,
    isFetching: selectIsFetching(state),
    schools: selectSchools(state, userSchoolCodes),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
    fetchProgramFields: () => dispatch(fetchProgramFields()),
    fetchStaffList: () => dispatch(fetchStaffList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
