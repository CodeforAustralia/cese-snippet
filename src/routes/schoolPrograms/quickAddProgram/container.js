import { connect } from 'react-redux';

import { createProgram } from "store/programs/actionCreators";
import {
  selectProgramTemplates,
  selectIsFetching as selectIsFetchingProgramTemplates
} from "store/programTemplates/selectors";
import { makeProgramTemplatesOptions } from 'store/programTemplates/helpers';


export const mapStateToProps = (state) => {
  const programTemplates = selectProgramTemplates(state);

  let optionsProgramTemplates;

  if (programTemplates && programTemplates.length) {
    optionsProgramTemplates = makeProgramTemplatesOptions(programTemplates);
  }

  return {
    optionsProgramTemplates,
    isFetchingProgramTemplates: selectIsFetchingProgramTemplates(state),
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(createProgram(program)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
