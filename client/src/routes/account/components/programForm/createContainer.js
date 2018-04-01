import { connect } from 'react-redux';
import { createProgram } from 'store/programs/actionCreators';
import { selectSession } from "store/session/selectors";

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const session = selectSession(state);
  const formState = location.state && location.state.formState || {};

  const newFormState = {
    ...formState,
    createdBy: session.id,
  };

  return {
    isEdit: false,
    formState: newFormState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(createProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
