import { connect } from 'react-redux';

import { createProgram } from "store/programs/actionCreators";
import {
  selectProgramTemplates,
  selectIsFetching as selectIsFetchingProgramTemplates
} from "store/programTemplates/selectors";
import { makeProgramTemplatesOptions } from 'store/programTemplates/helpers';
import { fetchProgramTemplates } from "store/programTemplates/actionCreators";
// import { updateFilterOnCreateProgram } from 'store/snippets/actionCreators';

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
    fetchProgramTemplates: () => dispatch(fetchProgramTemplates()),
    // onSubmitSuccess: (program) => dispatch( // todo - make this a flow instead
    //   updateFilterOnCreateProgram({
    //     schoolCode: program.schoolCode,
    //     year: program.year,
    //     programId: program.id,
    //   })
    // ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
