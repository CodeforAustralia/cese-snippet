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
import {
  selectSnippetsByFilter,
  selectIsFetchingByFilter,
} from "store/snippets/selectors";
import {
  fetchByFilter as fetchSnippetsByFilter,
} from "store/snippets/actionCreators";


const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  const program = selectProgram(state, programId);

  let school,
    snippetFilterProps,
    snippets,
    isFetchingSnippets;

  if (program) {
    school = selectSchool(state, program.schoolCode);

    snippetFilterProps = {
      schoolCode: program.schoolCode,
      year: '2018',
      programId: program.id,
    };

    snippets = selectSnippetsByFilter(state, snippetFilterProps);
    isFetchingSnippets = selectIsFetchingByFilter(state, snippetFilterProps);
  }

  return {
    program,
    isFetchingProgram: selectIsFetchingProgram(state, programId),
    school,
    isFetchingSchool: selectIsFetchingSchool(state),
    snippetFilterProps,
    snippets,
    isFetchingSnippets,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    fetchProgram: () => dispatch(fetchProgram(programId)),
    fetchSchool: (schoolCode) => dispatch(fetchSchool(schoolCode)),
    fetchSnippets: (filterProps) => dispatch(fetchSnippetsByFilter(filterProps)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
