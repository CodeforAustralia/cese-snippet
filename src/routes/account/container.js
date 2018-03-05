import { connect } from 'react-redux';

import { fetchSchools } from 'store/schools';
import { fetchAppliedPrograms } from 'store/appliedPrograms';

const mapStateToProps = (state) => {
  return {
    schools: state.schools,
    appliedPrograms: state.appliedPrograms,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchools: () => dispatch(fetchSchools()),
    fetchAppliedPrograms: () => dispatch(fetchAppliedPrograms())
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
