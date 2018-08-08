import { connect } from 'react-redux';
import { fetchByFilter as fetchSnippetsByFilter } from "store/snippets/actionCreators";
import {
  selectSnippetsByFilter,
  selectIsFetchingByFilter as selectIsFetchingSnippetsByFilter,
} from "store/snippets/selectors";
import { sortByDateCreated } from "store/snippets/helpers";

const mapStateToProps = (state, ownProps) => {
  const { program, school } = ownProps;
  const filterProps = {
    schoolCode: school.code,
    year: program.year,
    programId: program.id,
  };

  const snippets = selectSnippetsByFilter(state, filterProps); // todo - fetch only first 2
  const isFetchingSnippetsByFilter = selectIsFetchingSnippetsByFilter(state, filterProps);

  console.log(JSON.stringify(filterProps), isFetchingSnippetsByFilter);

  return {
    program,
    school,
    filterProps,

    snippets, //: sortByDateCreated(snippets),
    isFetchingSnippetsByFilter,
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
