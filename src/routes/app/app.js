import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';

import FakeLogin from 'routes/fakeLogin';
import Account from 'routes/account';


class App extends React.Component {
  render() {
    const {
      session,
      sessionUser,
    } = this.props;

    return (
      <AuthProvider session={session} sessionUser={sessionUser}>
        <Router>
          <Switch>
            <Route path="/" component={FakeLogin} />
            <PrivateRoute path="/account" component={Account} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
