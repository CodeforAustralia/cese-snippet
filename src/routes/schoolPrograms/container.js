import { connect } from 'react-redux';

import { selectSchool } from 'store/schools/selectors';
import { selectProgramsByFilterKey } from 'store/programs/selectors';

export const mapStateToProps = (state, ownProps) => {
  const { schoolCode, year } = ownProps;

  const school = selectSchool(state, schoolCode);
  const filteredPrograms = selectProgramsByFilterKey(state, { schoolCode, year });

  return {
    school,
    filteredPrograms,
  }
};

export default connect(mapStateToProps);
