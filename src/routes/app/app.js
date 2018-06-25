import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import Home from 'routes/home';
import LoggedIn from 'routes/loggedIn';
import LoggedOut from 'routes/loggedOut';
import Account from 'routes/account';
// import WhatsNext from 'routes/whatsNext';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const App = ({ session }) => (
  <div>
    <AuthProvider session={session}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoggedIn} />
          <Route path="/logged-out" component={LoggedOut} />
          {/*<Route path="/whats-next" component={WhatsNext} />*/}
          <PrivateRoute path="/account" component={Account} />
          {process.env.NODE_ENV === 'production' ?
            <Redirect to="/home" /> :
            <Route component={NoMatch} />
          }
        </Switch>
      </Router>
    </AuthProvider>
  </div>
);

export default App;
