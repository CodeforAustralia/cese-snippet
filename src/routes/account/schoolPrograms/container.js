import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchAppliedProgramsByFilters } from 'store/appliedPrograms/actionCreators';
import { selectAppliedProgramsByFilter } from 'store/appliedPrograms/selectors';

export const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.schoolCode;
  const year = void 0; //ownProps.match.params.year;  // todo
  return {
    schoolCode: code,
    school: selectSchool(state, code),
    appliedPrograms: selectAppliedProgramsByFilter(state, code, year),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchAppliedProgramsByFilters: (code, year) => dispatch(fetchAppliedProgramsByFilters({ code, year })) // todo
  }
};

export default connect(mapStateToProps, mapDispatchToProps);

