import { connect } from 'react-redux';

import { selectSession } from "store/session/selectors";

const mapStateToProps = (state) => {
  return {
    session: selectSession(state),
  }
};

export default connect(mapStateToProps);
