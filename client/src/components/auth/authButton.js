import React from "react";
import { withRouter } from "react-router-dom";
import withAuth from 'components/auth/withAuth';

const AuthButton = ({ history, isAuthenticated, signout }) => {
  return isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          signout(() => process.env.NODE_ENV === 'production' ?
            window.location = "http://nsweducation.cool" :
            history.push("/logged-out")
          )
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default withRouter(withAuth(AuthButton));
