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
    onSubmit: (values) => dispatch(updateUser(values));
  }
};

export default connect(mapStateToProps);
