import { connect } from 'react-redux';

import { selectSessionUser } from 'store/sessionUser/selectors';

export const mapStateToProps = (state) => {
  return {
    sessionUser: selectSessionUser(state),
  }
};

export default connect(mapStateToProps);
