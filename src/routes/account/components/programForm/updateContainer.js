import { connect } from 'react-redux';

import { updateProgram } from 'store/programs/actionCreators';
import { selectCms } from "store/cms/selectors";

const mapStateToProps = (state, ownProps) => {
  const {
    location,
    sessionUser,
  } = ownProps;

  const cmsProps = selectCms(state);
  const initialFormState = location.state && location.state.initialFormState || {};

  const newInitialFormState = {
    ...initialFormState,
    updatedBy: sessionUser.id,
  };

  return {
    sessionUser,
    cmsProps,
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
