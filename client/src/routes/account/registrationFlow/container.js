import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from "store/session/selectors";
import {
  selectSchools,
  selectIsFetching,
} from 'store/schools/selectors';


const mapStateToProps = (state, ownProps) => {
  const userSchoolCodes = selectUserSchoolCodes(state);

  return {
    session: selectSession(state),
    userSchoolCodes,
    isFetching: selectIsFetching(state),
    schools: selectSchools(state, userSchoolCodes),
    onSubmitSuccess: (resp) => {
      console.log(resp);
      // navigate to account
      ownProps.history.push('/account');
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps);

