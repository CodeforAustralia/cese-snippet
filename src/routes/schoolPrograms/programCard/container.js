import { connect } from 'react-redux';
import { fetchByFilter as fetchSnippetsByFilter } from "store/snippets/actionCreators";
import {
  selectSnippetsByFilter,
  selectIsFetchingByFilter,
} from "store/snippets/selectors";

const mapStateToProps = (state, ownProps) => {
  const { program, year, schoolCode } = ownProps;
  const filterProps = {
    schoolCode,
    year,
    programId: program.id,
  };
  return {
    program,
    snippetsIsFetching: selectIsFetchingByFilter(state, filterProps), // todo - fetch only first 2
    snippets: selectSnippetsByFilter(state, filterProps),
    filterProps,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { program, year, schoolCode } = ownProps;
  return {
    fetchSnippets: () => dispatch(fetchSnippetsByFilter({
      schoolCode,
      year,
      programId: program.id,
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
