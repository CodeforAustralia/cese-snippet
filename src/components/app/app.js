import React from "react";
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Nav from 'components/nav';
import Login from 'routes/login';
import Account from 'routes/account';


class App extends React.Component {
  componentDidMount() {
    return this.props.fetchSession();
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
