import { connect } from 'react-redux';
import { updateProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const session = selectSession(state);
  const initialFormState = location.state && location.state.initialFormState || {};

  const newInitialFormState = {
    ...initialFormState,
    updatedBy: session.id,
  };

  return {
    isEdit: true,
    initialFormState: newInitialFormState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(updateProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
