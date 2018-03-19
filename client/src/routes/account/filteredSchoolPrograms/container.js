import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchProgramsByFilters } from 'store/programs/actionCreators';
import { selectProgramsByFilterKey } from 'store/programs/selectors';
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
    school: selectSchool(state, code),
    filteredPrograms: selectProgramsByFilterKey(state, filterKey),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const code = ownProps.match.params.code;
  const year = ownProps.match.params.year;
  return {
    fetchSchool: () => dispatch(fetchSchool(code)),
    fetchProgramsByFilters: () => dispatch(fetchProgramsByFilters({code, year})),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
