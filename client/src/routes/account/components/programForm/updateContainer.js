import { connect } from 'react-redux';
import { updateProgram } from 'store/programs/actionCreators';

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  return {
    formState: location.state && location.state.formState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(updateProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
