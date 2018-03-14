import React from 'react';
import PropTypes from 'prop-types';

const withAuth = Composed => {
  const Component = (props, context) => {

    if (typeof context.isAuthenticated === 'undefined') {
      throw new Error(`Check that you've included AuthProvider.`);
    }

    const newProps = {
      ...props,
      isAuthenticated: context.isAuthenticated,
      authenticate: context.authenticate,
      signout: context.signout,
    };

    return <Composed {...newProps} />
  };

  Component.contextTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    authenticate: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired,
  };

  return Component;
};

export default withAuth;
