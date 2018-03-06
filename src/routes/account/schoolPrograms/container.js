import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchAppliedPrograms } from 'store/appliedPrograms/actionCreators';
// import { selectAppliedPrograms } from 'store/appliedPrograms/selectors';


export const mapStateToProps = (state, ownProps) => {
  const code = ownProps.schoolCode;
  return {
    schoolCode: code,
    school: selectSchool(state, code),
    // appliedPrograms: selectAppliedPrograms(state, code), // todo - is an object, make this a list
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchAppliedPrograms: (code) => dispatch(fetchAppliedPrograms(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
