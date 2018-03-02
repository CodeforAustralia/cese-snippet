import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Layout from 'layouts/login';
import style from './style.scss';
import Logo from './logo.png';
import Form from './form';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.history.push('/account/programs');
  }
  render() {
    return (
      <Layout>
        <div>
          <img className={`mb-4 ${style.logo}`} src={Logo} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>
          <Form onSuccess={this.onSubmit} />
        </div>
      </Layout>
    );
  }
}

export default withRouter(Login);
