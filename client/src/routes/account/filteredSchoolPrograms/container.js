import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchProgramsByFilter } from 'store/programs/actionCreators';
import {
  selectProgramsByFilterKey,
  selectAllFilterKeys,
} from 'store/programs/selectors';
import { getFilterKey } from "store/programs/helpers";


const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.code;
  const year = ownProps.match.params.year;

  const filterKey = getFilterKey({code, year});

  return {
    filters: {
      code,
      year,
    },
    availableFilters: selectAllFilterKeys(state),
    school: selectSchool(state, code),
    filteredPrograms: selectProgramsByFilterKey(state, filterKey),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const code = ownProps.match.params.code;
  const year = ownProps.match.params.year;
  return {
    fetchSchool: () => dispatch(fetchSchool(code)),
    fetchProgramsByFilter: () => dispatch(fetchProgramsByFilter({code, year})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
