import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'routes/app';
import AuthProvider from 'components/auth/authProvider';
import { BoxLoading } from "components/loading";

class Root extends React.Component {

  render() {
    const {
      session,
      sessionUser,
      isFetchingUser,
    } = this.props;

    return (
      <AuthProvider session={session} sessionUser={sessionUser}>
        <Router>
          {isFetchingUser !== false ?
              <BoxLoading /> :
              <App />
          }

        </Router>
      </AuthProvider>
    )
  }

}

export default Root
