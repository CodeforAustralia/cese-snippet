import { connect } from 'react-redux';

import {
  selectProgram,
  selectIsFetching as selectIsFetchingProgram,
} from "store/programs/selectors";
import { fetchProgram } from 'store/programs/actionCreators';

const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    program: selectProgram(state, programId),
    isFetchingProgram: selectIsFetchingProgram(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProgram: (programId) => dispatch(fetchProgram(programId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
