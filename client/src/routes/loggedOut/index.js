import React from 'react';
import {
  Row,
  Col,
  Container,
  Button,
} from 'reactstrap';
import {
  Link as RRLink,
} from 'react-router-dom';

import Layout from './../home/layout';
import style from './style.scss';

const LoggedOutPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={{size: 6, offset: 3}} md={{size: 8, offset: 2}}>
            <div className={style.loggedOutContainer}>
              <div className={style.upperContainer}>
                <p>You are logged out of <strong>Snippet</strong>.</p>

                <h1>Thank you for being part of&nbsp;<strong>Snippet</strong>.</h1>
                <h2 className="h3 text-primary pt-3">Come back anytime!</h2>
              </div>

              <div className={style.lowerContainer}>
                <h3 className="h4 pt-2">Some amazing things are coming!</h3>
                <p className="pt-2 mb-6">We'll notify you as we get closer to launching Snippet Beta.</p>

                <Button className="mt-4" to="/" color="pink" tag={RRLink}>Visit the homepage</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default LoggedOutPage;
