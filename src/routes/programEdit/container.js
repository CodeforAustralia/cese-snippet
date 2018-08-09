import { connect } from 'react-redux';

import {
  selectProgram,
  selectIsFetching as selectIsFetchingProgram,
} from 'store/programs/selectors';
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchool,
} from "store/schools/selectors";
import {
  fetchProgram,
  updateProgram,
} from "store/programs/actionCreators";
import { fetchSchool } from "store/schools/actionCreators";
import { getProgramUrl } from "helpers/url";
import {
  selectCms,
  selectIsFetching as selectIsFetchingCms,
} from 'store/cms/selectors';
import { fetchCms } from 'store/cms/actionCreators';
import { selectSessionUser } from "store/sessionUser/selectors";
import {getSchoolProgramsUrl} from "../../helpers/url";


const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  const program = selectProgram(state, programId);
  const cms = selectCms(state);
  const sessionUser = selectSessionUser(state);

  let school,
    schoolProgramUrl;

  if (program) {
    school = selectSchool(state, program.schoolCode);
    schoolProgramUrl = getSchoolProgramsUrl(program.schoolCode, program.year);
  }

  return {
    sessionUser,
    program,
    isFetchingProgram: selectIsFetchingProgram(state, programId),
    school,
    isFetchingSchool: selectIsFetchingSchool(state),
    schoolProgramUrl,
    programUrl: getProgramUrl(programId),
    cms,
    isFetchingCms: selectIsFetchingCms(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    fetchProgram: () => dispatch(fetchProgram(programId)),
    fetchSchool: (schoolCode) => dispatch(fetchSchool(schoolCode)),
    onSubmit: (program) => dispatch(updateProgram(program)),
    fetchCms: () => dispatch(fetchCms()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
