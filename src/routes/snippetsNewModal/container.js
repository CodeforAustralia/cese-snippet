import { connect } from 'react-redux';

import { createSnippet } from 'store/snippets/actionCreators';
import { selectSessionUser } from "store/sessionUser/selectors";

export const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const { school, program } = location.state;
  const sessionUser = selectSessionUser(state);
  return {
    program,
    school,
    sessionUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (snippet) => dispatch(createSnippet(snippet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
