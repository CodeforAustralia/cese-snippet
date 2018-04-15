import { connect } from 'react-redux';

import {
  selectSchools,
  selectIsFetching,
} from "store/schools/selectors";
import { selectUserSchoolCodes } from "store/session/selectors";
import { fetchSchools } from 'store/schools/actionCreators';


const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  return {
    userSchoolCodes,
    isFetching: selectIsFetching(state),
    schools: selectSchools(state, userSchoolCodes),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
