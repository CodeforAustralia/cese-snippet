import { connect } from 'react-redux';

import { selectSessionUser } from 'store/sessionUser/selectors';

import {
  selectIsFetchingByFilter as selectIsFetchingProgramsByFilter,
  selectProgramsByFilter,
} from "store/programs/selectors";
import {
  fetchByFilter as fetchProgramsByFilter,
  createProgram,
} from "store/programs/actionCreators";

import { fetchSchool } from 'store/schools/actionCreators';
import {
  selectSchool,
  selectIsFetching as selectIsFetchingSchools,
} from 'store/schools/selectors';

import { fetchProgramTemplates } from "store/programTemplates/actionCreators";
import {
  selectProgramTemplates,
  selectIsFetching as selectIsFetchingProgramTemplates
} from "store/programTemplates/selectors";
import {
  excludeProgramsProvided,
  getOnlySuggestedPrimary,
  getOnlySuggestedSecondary,
  makeProgramTemplatesOptions,
} from 'store/programTemplates/helpers';


export const mapStateToProps = (state) => {
  const sessionUser = selectSessionUser(state);
  const schoolCode = sessionUser.schools[0];

  if (typeof schoolCode === 'undefined') {
    throw new Error('"schoolCode" must be defined here');
    // todo - redirect
  }

  const school = selectSchool(state, schoolCode);
  const programTemplates = selectProgramTemplates(state);
  const schoolPrograms = selectProgramsByFilter(state, { schoolCode, year: '2018' });

  let suggestedProgramTemplates,
    optionsProgramTemplates;

  if (school) {
    if (programTemplates && programTemplates.length) {
      if (school.subtype === 'primary') {
        suggestedProgramTemplates = excludeProgramsProvided(getOnlySuggestedPrimary(programTemplates), schoolPrograms);
      } else {
        suggestedProgramTemplates = excludeProgramsProvided(getOnlySuggestedSecondary(programTemplates), schoolPrograms);
      }
      optionsProgramTemplates = makeProgramTemplatesOptions(programTemplates);
    }
  }

  return {
    sessionUser,
    school,
    schoolPrograms,
    isFetchingSchool: selectIsFetchingSchools(state),
    isFetchingSchoolPrograms: selectIsFetchingProgramsByFilter(state, { schoolCode, year: '2018' }),
    suggestedPrograms: suggestedProgramTemplates,
    optionsProgramTemplates,
    isFetchingProgramTemplates: selectIsFetchingProgramTemplates(state),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(createProgram(program)),
    fetchSchool: (schoolCode) => dispatch(fetchSchool(schoolCode)),
    fetchSchoolPrograms: (schoolCode) => dispatch(fetchProgramsByFilter({ schoolCode, year: '2018'})),
    fetchProgramTemplates: () => dispatch(fetchProgramTemplates()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
