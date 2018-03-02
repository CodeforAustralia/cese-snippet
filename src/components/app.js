import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from 'routes/home';
import Login from 'routes/login';
import Logout from 'routes/logout';
import Account from 'routes/account';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/account" component={Account} />
    </div>
  </Router>
);

export default App;
