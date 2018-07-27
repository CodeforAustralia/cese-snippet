import { connect } from 'react-redux';

import {
  selectSessionUser,
  selectSessionUserSchool,
} from 'store/sessionUser/selectors';
import { updateUser } from 'store/users/actionCreators';
import { syncGetSchoolsOptions } from "data/schools/getters";

export const mapStateToProps = (state) => {
  const sessionUser = selectSessionUser(state);
  return {
    optionsSchools: syncGetSchoolsOptions(),
    sessionUser,
    sessionUserSchool: selectSessionUserSchool(state, sessionUser),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
