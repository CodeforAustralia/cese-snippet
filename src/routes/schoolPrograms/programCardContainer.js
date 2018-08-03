import { connect } from 'react-redux';
import { fetchSnippetsByProgram } from "store/snippets/actionCreators";
import { selectSnippetsByFilter } from "store/snippets/selectors";

const mapStateToProps = (state, ownProps) => {
  const { program, year, schoolCode } = ownProps;
  const filterProps = {
    schoolCode,
    year,
    programId: program.id,
  };
  return {
    program,
    snippets: selectSnippetsByFilter(state, filterProps),
    filterProps,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { program, year, schoolCode } = ownProps;
  return {
    fetchSnippets: () => dispatch(fetchSnippetsByProgram({
      schoolCode,
      year,
      programId: program.id,
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
