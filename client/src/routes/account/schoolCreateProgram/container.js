import { connect } from 'react-redux';

import { fetchSchools } from "store/schools/actionCreators";
import {
  selectIsFetching,
  selectSchools,
} from "store/schools/selectors";
import { selectUserSchoolCodes } from "store/session/selectors";

const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  return {
    userSchoolCodes,
    isFetching: selectIsFetching(state),
    schools: selectSchools(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
