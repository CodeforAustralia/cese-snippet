import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Row,
  Col,
  Container,
} from 'reactstrap';

import Layout from './../home/layout';
import Form from './form';
import style from './style.scss';


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
        <Container>
          <Row>
            <Col sm={{size: 6, offset: 3}} md={{size: 8, offset: 2}}>
              <div className={style.loginContainer}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <p>If you're not sure what Snippet is, please read about it <Link to="/">here</Link>.</p>

                <Alert color="info">
                  This is a demo site, so there is no need to supply log in credentials. You can continue as Malorie.
                </Alert>

                <Form onSuccess={this.login} />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Login;
