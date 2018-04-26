import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import Home from 'routes/home';
import Login from 'routes/login';
import LoggedOut from 'routes/loggedOut';
import Account from 'routes/account';
import Feedback from 'routes/feedback';
import WhatsNext from 'routes/whatsNext';
import TopBanner from 'components/topBanner';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const App = ({ session }) => (
  <div>
    <TopBanner />
    <AuthProvider session={session}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logged-out" component={LoggedOut} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/whats-next" component={WhatsNext} />
          <PrivateRoute path="/account" component={Account} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AuthProvider>
  </div>
);

export default App;
