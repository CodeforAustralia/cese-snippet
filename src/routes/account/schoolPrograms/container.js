import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchAppliedPrograms } from 'store/appliedPrograms/actionCreators';
// import { selectAppliedPrograms } from 'store/appliedPrograms/selectors';

export const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.schoolCode;
  // const year = ownProps.match.params.year;

  // filters
  // todo - get the right programs for the right year and the right school

  return {
    schoolCode: code,
    school: selectSchool(state, code),
    // appliedPrograms: selectAppliedPrograms(state, code),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchAppliedPrograms: (code) => dispatch(fetchAppliedPrograms(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);

