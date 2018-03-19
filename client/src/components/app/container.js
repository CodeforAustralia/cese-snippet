import { connect } from 'react-redux';

import { selectSession } from 'store/session/selectors';

export const mapStateToProps = (state) => {
  return {
    session: selectSession(state),
  }
};

export default connect(mapStateToProps, null);
