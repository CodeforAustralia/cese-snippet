import { connect } from 'react-redux';
import {
  selectProgram,
  selectIsFetching,
} from 'store/programs/selectors';
import { fetchProgram } from 'store/programs/actionCreators';


const mapStateToProps = (state, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    isFetching: selectIsFetching(state),
    program: selectProgram(state, programId),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { programId } = ownProps.match.params;
  return {
    fetchProgram: () => dispatch(fetchProgram(programId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
