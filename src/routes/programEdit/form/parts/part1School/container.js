import { connect } from 'react-redux';

import { getSchoolCodes } from 'store/staff/helpers';
import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
} from 'store/schools/selectors';


const mapStateToProps = (state, ownProps) => {
  const { sessionUser } = ownProps;

  const userSchoolCodes = getSchoolCodes(sessionUser);

  return {
    userSchools: selectSchools(state, userSchoolCodes),
    isFetchingUserSchools: selectIsFetchingSchools(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
