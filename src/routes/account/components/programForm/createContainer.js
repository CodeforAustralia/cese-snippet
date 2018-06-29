import { connect } from 'react-redux';

import { createProgram } from 'store/programs/actionCreators';
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
    createdBy: sessionUser.id,
  };

  return {
    sessionUser,
    cmsProps,
    isEdit: false,
    initialFormState: newInitialFormState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => dispatch(createProgram(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
