import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import Home from 'routes/home';
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/account" component={Account} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;
