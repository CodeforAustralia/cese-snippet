import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'routes/app';
import AuthProvider from 'components/auth/authProvider';

class Root extends React.Component {

  render() {
    const {
      session,
      sessionUser,
    } = this.props;

    return (
      <AuthProvider session={session} sessionUser={sessionUser}>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    )
  }

}

export default Root
