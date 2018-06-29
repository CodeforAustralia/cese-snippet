import React from 'react';
import PropTypes from 'prop-types';

const withAuth = Composed => {
  const Component = (props, context) => {

    if (typeof context.isAuthenticated === 'undefined') {
      throw new Error(`Check that you've included AuthProvider.`);
    }

    const newProps = {
      ...props,
      session: context.session,
      sessionUser: context.sessionUser,
      isAuthenticated: context.isAuthenticated,
      authenticate: context.authenticate,
      signout: context.signout,
    };

    return <Composed {...newProps} />
  };

  Component.contextTypes = {
    session: PropTypes.object,
    sessionUser: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired,
  };

  return Component;
};

export default withAuth;

