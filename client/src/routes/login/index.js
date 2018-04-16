import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alert
} from 'reactstrap';

import Layout from './layout';
import Form from './form';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    setTimeout(this.props.history.push('/account/decision'), 100);
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>

          <Alert color="info">
            This is just a demo site, so there's no need to supply log in credentials, you can continue as Malorie.
          </Alert>

          <Form onSuccess={this.login} />
        </div>
      </Layout>
    );
  }
}

export default Login;
