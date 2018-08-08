import { connect } from 'react-redux';

import { selectSessionUser } from 'store/sessionUser/selectors';
import { updateUser } from 'store/users/actionCreators';
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
} from 'store/schools/selectors';
import { makeSchoolsOptions } from 'store/schools/helpers';
import { fetchSchools } from 'store/schools/actionCreators';
import { PILOT_SCHOOLS_CODES } from 'appConfig';


export const mapStateToProps = (state) => {
  const sessionUser = selectSessionUser(state);
  const schools = selectSchools(state);

  let optionsSchools = [];

  if (schools && schools.length) {
    optionsSchools = makeSchoolsOptions(schools);
  }

  return {
    sessionUser,
    isFetchingSchools: selectIsFetchingSchools(state),
    optionsSchools,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUser(user)),
    fetchSchools: () => dispatch(fetchSchools(PILOT_SCHOOLS_CODES)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
