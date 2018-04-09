import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './layout';
import style from './style.scss';
import Logo from './logo.png';
import Form from './form';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    setTimeout(this.props.history.push('/account'), 100);
  }

  render() {
    return (
      <Layout>
        <div>
          <img className={`mb-4 ${style.logo}`} src={Logo} alt="" width="100" height="100" />

          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>

          <Form onSuccess={this.login} />
        </div>
      </Layout>
    );
  }
}

export default Login;
