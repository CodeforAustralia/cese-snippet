import { connect } from 'react-redux';
import { fetchByFilter as fetchSnippetsByFilter } from "store/snippets/actionCreators";
import {
  selectSnippetsByFilter,
  selectIsFetchingByFilter,
} from "store/snippets/selectors";

const mapStateToProps = (state, ownProps) => {
  const { program, school } = ownProps;
  const filterProps = {
    schoolCode: school.code,
    year: program.year,
    programId: program.id,
  };
  return {
    program,
    school,
    snippetsIsFetching: selectIsFetchingByFilter(state, filterProps), // todo - fetch only first 2
    snippets: selectSnippetsByFilter(state, filterProps),
    filterProps,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { program, school } = ownProps;
  return {
    fetchSnippets: () => dispatch(fetchSnippetsByFilter({
      schoolCode: school.code,
      year: program.year,
      programId: program.id,
    }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
