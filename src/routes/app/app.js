import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { BoxLoading } from 'components/loading';
import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import LoggedIn from 'routes/loggedIn';
import Account from 'routes/account';


class App extends React.Component {
  componentDidMount() {
    if (!this.props.session || !this.props.sessionUser) {
      this.fetchSessionData();
    }
  }
  fetchSessionData() {
    this.props.fetchSession();
    this.props.fetchSessionUser();
  }
  render() {
    const {
      session,
      sessionUser,
      isFetchingSessionUser,
    } = this.props;

    if (isFetchingSessionUser) {
      return <BoxLoading />
    }

    return (
      <AuthProvider session={session} sessionUser={sessionUser}>
        <Router>
          <Switch>
            <Route path="/login" component={LoggedIn} />
            <PrivateRoute path="/account" component={Account} />
            <Redirect to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
