import { connect } from 'react-redux';

import { createSnippet } from 'store/snippets/actionCreators';

export const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const { school, program } = location.state;
  return {
    program,
    school,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (snippet) => dispatch(createSnippet(snippet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
