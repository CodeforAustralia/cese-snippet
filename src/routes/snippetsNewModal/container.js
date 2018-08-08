import { connect } from 'react-redux';

import { createSnippet } from 'store/snippets/actionCreators';

export const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (snippet) => dispatch(createSnippet(snippet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
