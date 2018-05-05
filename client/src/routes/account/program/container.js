import { connect } from 'react-redux';
import {
  selectProgram,
  selectIsFetching as selectIsFetchingPrograms,
} from 'store/programs/selectors';
import { fetchProgram } from 'store/programs/actionCreators';
import { fetchStaff } from 'store/staff/actionCreators';
import { fetchSchool } from 'store/schools/actionCreators';
import {
  selectStaff,
  selectStaffMember,
  selectIsFetching as selectIsFetchingStaff,
} from "store/staff/selectors";
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchool,
} from "store/schools/selectors";


const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  const program = selectProgram(state, programId);

  let programStaff = [],
    staffCreatedBy = {},
    staffUpdatedBy = {},
    school = {}
  ;

  if (program) {
    programStaff = selectStaff(state, program.staff);
    staffCreatedBy = selectStaffMember(state, program.createdBy);
    staffUpdatedBy = selectStaffMember(state, program.updatedBy);
    school = selectSchool(state, program.code);
  }

  return {
    program,
    school,
    isFetchingProgram: selectIsFetchingPrograms(state),
    isFetchingStaff: selectIsFetchingStaff(state),
    isFetchingSchool: selectIsFetchingSchool(state),
    programStaff,
    staffCreatedBy,
    staffUpdatedBy,
    getAllStaffIds: (program) => {
      if (!program) {
        return [];
      }
      return [
        ...program.staff,
        program.createdBy,
        program.updatedBy,
      ]
    },
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    fetchStaff: (staffIds) => dispatch(fetchStaff(staffIds)),
    fetchProgram: () => dispatch(fetchProgram(programId)),
    fetchSchool: (code) => dispatch(fetchSchool(code)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
