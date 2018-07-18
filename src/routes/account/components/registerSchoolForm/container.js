import { connect } from 'react-redux';
import without from 'lodash/without';

import {
  selectSession,
} from "store/session/selectors";
import { selectSchoolsList } from 'store/cms/selectors';
import { getSchoolsOptions } from 'store/cms/helpers';
import { getSchoolProgramsUrl } from 'helpers/url';


const mapStateToProps = (state, ownProps) => {
  const schoolsList = selectSchoolsList(state);
  const schoolsListFiltered = without(schoolsList, ...ownProps.userSchoolCodes);

  return {
    session: selectSession(state),
    schoolsListOptions: getSchoolsOptions(schoolsListFiltered),
    onSubmitSuccess: (code) => {
      ownProps.history.push(getSchoolProgramsUrl(code, '2018'));
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onSubmit: (session) => dispatch(saveSession(session)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
