import React from 'react';
import { withRouter } from 'react-router-dom';

import Layout from 'layouts/login';

class Logout extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 1000);
  }
  render() {
    return (
      <Layout>
        <h1>Logging out</h1>
      </Layout>
    );
  }
}

export default withRouter(Logout);
