import { connect } from 'react-redux';

import { selectSessionUserSchool } from 'store/sessionUser/selectors';
import {
  syncGetProgramTemplateOptions,
  syncGetSuggestedProgramTemplates,
} from 'data/programTemplates/getters';
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
  const schoolProgramNames = schoolPrograms.map(p => p.name);
  return {
    school,
    isFetchingSchoolPrograms: getIsFetchingSchoolPrograms(state),
    schoolPrograms,
    suggestedPrograms: syncGetSuggestedProgramTemplates(school.subtype).filter((program) => {
      return !schoolProgramNames.includes(program.name);
    }),
    optionsProgramTemplates: syncGetProgramTemplateOptions(),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(createProgram(program)),
    fetchSchoolPrograms: (code) => dispatch(fetchProgramsByFilter({ schoolCode: code, year: '2018'})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
