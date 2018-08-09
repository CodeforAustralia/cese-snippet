import { connect } from 'react-redux';
import { fetchByFilter as fetchSnippetsByFilter } from "store/snippets/actionCreators";
import {
  selectSnippetsByFilter,
  selectIsFetchingByFilter as selectIsFetchingSnippetsByFilter,
} from "store/snippets/selectors";

const mapStateToProps = (state, ownProps) => {
  const { program, school } = ownProps;
  const filterProps = {
    schoolCode: school.code,
    year: program.year,
    programId: program.id,
  };

  const snippets = selectSnippetsByFilter(state, filterProps); // todo - fetch only first 2
  const isFetchingSnippetsByFilter = selectIsFetchingSnippetsByFilter(state, filterProps);

  return {
    program,
    school,
    filterProps,
    snippets, //: sortByDateCreated(snippets), todo
    isFetchingSnippetsByFilter,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { program, school } = ownProps;
  return {
    fetchSnippets: (filterProps) => dispatch(fetchSnippetsByFilter(filterProps)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
