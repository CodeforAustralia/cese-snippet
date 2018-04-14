import { connect } from 'react-redux';
import { addSchool } from "store/session/actionCreators";
import { fetchSchools } from 'store/schools/actionCreators';
import {
  selectSession,
  selectUserSchoolCodes,
} from "store/session/selectors";
import {
  selectSchools,
  selectIsFetching,
} from 'store/schools/selectors';
import { selectSchoolsList } from 'store/static/selectors';
import { fetchSchoolsList } from 'store/static/actionCreators';
import { makeSchoolsListOptions } from 'store/static/helpers';

const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state);
  const schoolsList = selectSchoolsList(state);

  return {
    session: selectSession(state),
    userSchoolCodes,
    isFetching: selectIsFetching(state),
    schools: selectSchools(state, userSchoolCodes),
    schoolsListOptions: makeSchoolsListOptions(schoolsList),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: (codes) => dispatch(fetchSchools(codes)),
    addSchool: (code) => dispatch(addSchool(code)),
    fetchSchoolsList: (code) => dispatch(fetchSchoolsList()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
