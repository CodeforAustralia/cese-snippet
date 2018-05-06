import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
  selectErrorMessage as selectErrorMessageSchools,
} from 'store/schools/selectors';
import {
  selectSession,
  selectUserSchoolCodes,
} from "store/session/selectors";
import {
  fetchStaffList,
  fetchCmsData,
} from 'store/static/actionCreators';


const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  return {
    session: selectSession(state),
    userSchoolCodes,
    isFetchingSchools: selectIsFetchingSchools(state),
    errorMessageSchools: selectErrorMessageSchools(state),
    schools: selectSchools(state, userSchoolCodes),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
    fetchCmsData: () => dispatch(fetchCmsData()),
    fetchStaffList: () => dispatch(fetchStaffList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
