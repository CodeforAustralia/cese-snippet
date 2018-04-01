import { connect } from 'react-redux';
import { updateProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const session = selectSession(state);
  const formState = location.state && location.state.formState || {};

  const newFormState = {
    ...formState,
    updatedBy: session.id,
  };

  return {
    isEdit: true,
    formState: newFormState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(updateProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
