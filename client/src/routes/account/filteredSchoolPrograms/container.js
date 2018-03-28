import { connect } from 'react-redux';

import { selectSchool } from 'store/schools/selectors';
import { fetchProgramsByFilter } from 'store/programs/actionCreators';
import {
  selectIsFetching,
  selectProgramsByFilterKey,
  // selectAllFilterKeys,
} from 'store/programs/selectors';
import { getFilterKey } from "store/programs/helpers";


const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.code;
  const year = ownProps.match.params.year;

  const filterKey = getFilterKey({code, year});
  const filteredPrograms = selectProgramsByFilterKey(state, filterKey);

  return {
    filters: {
      code,
      year,
    },
    // availableFilters: selectAllFilterKeys(state),

    availableFilters: [
      {code, year: '2018'},
      {code, year: '2017'},
    ],

    school: selectSchool(state, code),
    filteredPrograms,

    isFetching: selectIsFetching(state),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const code = ownProps.match.params.code;
  const year = ownProps.match.params.year;
  return {
    fetchProgramsByFilter: () => dispatch(fetchProgramsByFilter({code, year})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
