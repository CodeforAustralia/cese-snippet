import React, { Children } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class AuthProvider extends React.Component {

  // get the service/data
  getChildContext() {
    const { session } = this.props;

    const state = {
      isAuthenticated: !isEmpty(session),
    };

    return {
      isAuthenticated: state.isAuthenticated,
      authenticate(cb) {
        if (!state.isAuthenticated) {
          state.isAuthenticated = true;
          setTimeout(cb, 100); // fake async
        }
      },
      signout(cb) {
        if (state.isAuthenticated) {
          state.isAuthenticated = false;
          setTimeout(cb, 100);
        }
      }
    }
  }

  render() {
    return Children.only(this.props.children)
  }
}

// tell React _what_ it provides
AuthProvider.childContextTypes = {
  isAuthenticated: PropTypes.bool,
  authenticate: PropTypes.func,
  signout: PropTypes.func,
};

AuthProvider.propTypes = {
  session: PropTypes.object,
};

export default AuthProvider;
