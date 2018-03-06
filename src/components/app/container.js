import { connect } from 'react-redux';

import { fetchSession } from 'store/session/actionCreators';

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
