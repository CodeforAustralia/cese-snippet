import { connect } from 'react-redux';

import { fetchSchool } from "store/schools/actionCreators";
import { selectSchool } from 'store/schools/selectors';
import { fetchProgramsByFilters } from 'store/programs/actionCreators';
import { selectProgramsByFilter } from 'store/programs/selectors';
import { getYear } from 'utils/formatDate';


export const mapStateToProps = (state, ownProps) => {
  const code = ownProps.match.params.schoolCode;
  const year = getYear(); //void 0; //ownProps.match.params.year;  // todo

  return {
    schoolCode: code,
    school: selectSchool(state, code),
    programs: selectProgramsByFilter(state, code, year),
    yearSelected: year,
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (code) => dispatch(fetchSchool(code)),
    fetchProgramsByFilters: (code, year) => dispatch(fetchProgramsByFilters({ code, year }))
  }
};

export default connect(mapStateToProps, mapDispatchToProps);

