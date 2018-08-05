import { connect } from 'react-redux';

import {
  selectProgram,
  selectIsFetching as selectIsFetchingProgram,
} from 'store/programs/selectors';
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchool,
} from "store/schools/selectors";
import { fetchProgram } from "store/programs/actionCreators";
import { fetchSchool } from "store/schools/actionCreators";


const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  const program = selectProgram(state, programId);

  let school = {};

  if (program) {
    school = selectSchool(state, program.schoolCode);
  }

  return {
    program,
    isFetchingProgram: selectIsFetchingProgram(state, programId),
    school,
    isFetchingSchool: selectIsFetchingSchool(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    fetchProgram: () => dispatch(fetchProgram(programId)),
    fetchSchool: (schoolCode) => dispatch(fetchSchool(schoolCode)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
