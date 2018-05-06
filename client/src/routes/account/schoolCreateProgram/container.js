import { connect } from 'react-redux';

import { fetchSchools } from "store/schools/actionCreators";
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
  selectErrorMessage as selectErrorMessageSchools,
} from "store/schools/selectors";
import { selectUserSchoolCodes } from "store/session/selectors";

const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  return {
    userSchoolCodes,
    isFetchingSchools: selectIsFetchingSchools(state),
    errorMessageSchools: selectErrorMessageSchools(state),
    schools: selectSchools(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
