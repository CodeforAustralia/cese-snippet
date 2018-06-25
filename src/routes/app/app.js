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
import LoggedOut from 'routes/loggedOut';
import Account from 'routes/account';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends React.Component {
  componentDidMount() {
    this.fetchInitialData();
  }
  fetchInitialData() {
    this.props.fetchSession();
    this.props.fetchSessionUser();
  }
  render() {
    const {
      session,
      isFetchingSessionUser,
    } = this.props;

    if (isFetchingSessionUser) {
      return <BoxLoading />
    }

    return (
      <AuthProvider session={session}>
        <Router>
          <Switch>
            <Route path="/login" component={LoggedIn} />
            <Route path="/logged-out" component={LoggedOut} />
            <PrivateRoute path="/account" component={Account} />
            {process.env.NODE_ENV === 'production' ?
              <Redirect to="/home" /> :
              <Route component={NoMatch} />
            }
            <Redirect exact from="/" to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
