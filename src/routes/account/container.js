import { connect } from 'react-redux';
import get from 'lodash/get';

import { selectSession } from 'store/session/selectors';
import { selectStaffMember } from "store/staff/selectors";
import { getSchoolCodes } from 'store/staff/helpers';
import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSchools,
  selectIsFetching as selectIsFetchingSchools,
} from 'store/schools/selectors';
import { fetchCmsData } from 'store/cms/actionCreators';


const mapStateToProps = (state) => {
  const session = selectSession(state);
  let sessionUser = null;
  if (session) {
    const staffId = get(session, 'id', null);
    sessionUser = selectStaffMember(state, staffId);
  }
  const userSchoolCodes = getSchoolCodes(sessionUser);
  return {
    userSchoolCodes,
    schools: selectSchools(state, userSchoolCodes),
    isFetchingSchools: selectIsFetchingSchools(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
    fetchCmsData: () => dispatch(fetchCmsData()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
