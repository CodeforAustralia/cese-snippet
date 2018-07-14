import React from 'react';
import cx from 'classnames';
import { Link as RRLink } from 'react-router-dom';
import {
  Row,
  Col,
  Container,
  Button,
} from 'reactstrap';

import Layout from 'layouts/home';
import style from './style.scss';


// todo - style like this https://sso.det.nsw.edu.au/sso/UI/Login?realm=detnsw&goto=https://student.det.nsw.edu.au/

const FakeLogin = ({ sessionUser }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={{size: 8, offset: 2}}>
            <div className={cx(style.main, 'text-center')}>
              <div className={style.formSignin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">User ID</label>
                <input type="email" id="inputEmail" defaultValue={sessionUser.username} className={style.formControl} placeholder="Enter your User ID" required />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" defaultValue="******" className={style.formControl} placeholder="Enter your password" required />
                <Button tag={RRLink} to="/account" size="lg" color="primary" block>Log in</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default FakeLogin;
