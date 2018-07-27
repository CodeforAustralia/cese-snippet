import { connect } from 'react-redux';

import { selectSessionUser } from 'store/sessionUser/selectors';
import { updateUser } from 'store/users/actionCreators';
import { syncGetSchoolsOptions } from "data/schools/getters";

export const mapStateToProps = (state) => {
  return {
    sessionUser: selectSessionUser(state),
    optionsSchools: syncGetSchoolsOptions(),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUser(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
