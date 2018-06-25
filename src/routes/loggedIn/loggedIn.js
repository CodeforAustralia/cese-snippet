import React from 'react';
import {
  Row,
  Col,
  Container,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import style from './style.scss';
import Layout from 'layouts/home';
import { getName } from 'store/staff/helpers';

const LoggedIn = ({ sessionUser }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={{size: 8, offset: 2}}>
            <div className={style.loggedInContainer}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              {sessionUser ?
                <p>You are signed in as <span className={style.userName}>{getName(sessionUser)}</span>.</p> :
                <p>Logging in...</p>
              }

              <p className="mt-5"><Button to="/account" tag={RRLink} color="primary">Continue to Account →</Button></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default LoggedIn;
