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
  return {
    school,
    isFetchingSchoolPrograms: getIsFetchingSchoolPrograms(state),
    schoolPrograms: selectProgramsByFilterKey(state, { schoolCode: school.code }),
    suggestedPrograms: syncGetSuggestedProgramTemplates(school.subtype),
    optionsProgramTemplates: syncGetProgramTemplateOptions(),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (programTemplate) => dispatch(createProgram(programTemplate)),
    fetchSchoolPrograms: (code) => dispatch(fetchProgramsByFilter({ schoolCode: code, year: '2018'})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
