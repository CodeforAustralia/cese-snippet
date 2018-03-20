import React from "react";
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import Login from 'routes/login';
import Account from 'routes/account';


const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const App = ({session}) => (
  <AuthProvider session={session}>
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/account" component={Account} />
          <Redirect exact from="/" to="/login" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
