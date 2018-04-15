import { connect } from 'react-redux';

import { selectUserSchoolCodes } from "store/session/selectors";
import { selectSchoolsList } from 'store/static/selectors';
import { fetchSchoolsList } from 'store/static/actionCreators';
import { makeSchoolsListOptions } from 'store/static/helpers';
import { registerMySchool } from 'store/session/actionCreators';


const mapStateToProps = (state) => {
  const userSchoolCodes = selectUserSchoolCodes(state) || [];
  const schoolsList = selectSchoolsList(state);

  const filteredSchoolsList = typeof schoolsList !== 'undefined' ?
    schoolsList.filter(school => {
      return userSchoolCodes.includes(school.code) === false;
    }) :
    []
  ;

  return {
    schoolsListOptions: makeSchoolsListOptions(filteredSchoolsList),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchoolsList: () => dispatch(fetchSchoolsList()),
    onSubmit: (values) => dispatch(registerMySchool(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
