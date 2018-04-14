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
    onSubmitSuccess: (resp) => {
      console.log(resp);
      debugger }
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
