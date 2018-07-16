import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import withAuth from './withAuth';

const PrivateRoute = ({ isAuthenticated, component: Component, sessionUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/schools/${sessionUser.schools[0]}/programs`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default withAuth(PrivateRoute);
