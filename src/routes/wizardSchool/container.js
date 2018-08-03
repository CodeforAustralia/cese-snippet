import { connect } from 'react-redux';

import {
  selectSessionUser,
  selectSessionUserSchool,
} from 'store/sessionUser/selectors';
import { updateUserProcess } from 'store/users/flows';
import { selectSchools } from 'store/schools/selectors';
import { makeSchoolsOptions } from 'store/schools/helpers';

export const mapStateToProps = (state) => {
  const sessionUser = selectSessionUser(state);
  const schools = selectSchools(state);
  return {
    optionsSchools: makeSchoolsOptions(schools),
    sessionUser,
    sessionUserSchool: selectSessionUserSchool(state, sessionUser),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUserProcess(user)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
