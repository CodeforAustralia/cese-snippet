import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchAppliedProgramsBySchool } from 'store/appliedPrograms/actionCreators';
import { selectAppliedPrograms } from 'store/appliedPrograms/selectors';

export const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.schoolCode;
  const year = "2018"; //ownProps.match.params.year;  // todo
  return {
    schoolCode: code,
    school: selectSchool(state, code),
    appliedPrograms: selectAppliedPrograms(state, code, year),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchAppliedProgramsBySchool: (code) => dispatch(fetchAppliedProgramsBySchool(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);

