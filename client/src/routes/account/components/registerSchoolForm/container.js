import { connect } from 'react-redux';
import without from 'lodash/without';

import {
  selectSession,
  selectUserSchoolCodes,
} from "store/session/selectors";
import { selectSchoolsList } from 'store/static/selectors';
import { fetchSchoolsList } from 'store/static/actionCreators';
import { makeSchoolsListOptions } from 'store/static/helpers';
import { saveSession } from 'store/session/actionCreators';
import { getSchoolProgramsUrl } from 'helpers/url';


const mapStateToProps = (state, ownProps) => {
  const userSchoolCodes = selectUserSchoolCodes(state) || [];
  const schoolsList = selectSchoolsList(state);

  const schoolsListFiltered = without(schoolsList, ...userSchoolCodes);

  return {
    session: selectSession(state),
    schoolsListOptions: makeSchoolsListOptions(schoolsListFiltered),
    onSubmitSuccess: (code) => {
      ownProps.history.push(getSchoolProgramsUrl(code, '2018'));
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchoolsList: () => dispatch(fetchSchoolsList()),
    onSubmit: (session) => dispatch(saveSession(session)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
