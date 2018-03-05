import { connect } from 'react-redux';

import { fetchSession } from 'store/session';

const mapStateToProps = (state) => {
  return {
    session: state.session,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSession: () => dispatch(fetchSession()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps);
