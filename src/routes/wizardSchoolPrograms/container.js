import { connect } from 'react-redux';

import { selectSessionUserSchool } from 'store/sessionUser/selectors';
import { selectProgramTemplates } from 'store/programTemplates/selectors';
import {
  excludeProgramsProvided,
  getOnlySuggestedPrimary,
  getOnlySuggestedSecondary,
  makeProgramTemplatesOptions,
} from 'store/programTemplates/helpers';
import {
  selectIsFetching as getIsFetchingSchoolPrograms,
  selectProgramsByFilterKey,
} from "store/programs/selectors";
import {
  fetchProgramsByFilter,
  createProgram,
} from "store/programs/actionCreators";


export const mapStateToProps = (state) => {
  const school = selectSessionUserSchool(state);
  const schoolPrograms = selectProgramsByFilterKey(state, { schoolCode: school.code });

  const programTemplates = selectProgramTemplates(state);
  let suggestedProgramTemplates = null;

  if (school.subtype === 'primary') {
    suggestedProgramTemplates = excludeProgramsProvided(getOnlySuggestedPrimary(programTemplates), schoolPrograms);
  } else {
    suggestedProgramTemplates = excludeProgramsProvided(getOnlySuggestedSecondary(programTemplates), schoolPrograms);
  }

  return {
    school,
    isFetchingSchoolPrograms: getIsFetchingSchoolPrograms(state),
    schoolPrograms,
    suggestedPrograms: suggestedProgramTemplates,
    optionsProgramTemplates: makeProgramTemplatesOptions(suggestedProgramTemplates),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(createProgram(program)),
    fetchSchoolPrograms: (code) => dispatch(fetchProgramsByFilter({ schoolCode: code, year: '2018'})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
