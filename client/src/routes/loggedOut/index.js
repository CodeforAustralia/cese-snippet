import React from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import {
  Link,
} from 'react-router-dom';

import Layout from './../home/layout';
import Form from 'components/feedbackForm';
import style from './style.scss';

const LoggedOutPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <div className={style.loggedOutContainer}>
              <div className={style.headlineContainer}>
                <p>You are logged out of <strong>Snippet</strong>.</p>

                <h1>Thank you for being part of&nbsp;<strong>Snippet</strong></h1>
              </div>

              <div className={style.feedbackContainer}>
                <h3 className="h5 pb-2">Please take a moment to tell us how your experience was today?</h3>
                <Form />
              </div>

              <div className={style.goHomeContainer}>
                <h3 className="h5 pt-2">Amazing things are coming!</h3>
                <p className="pt-2 mb-6">We'll notify you as we get closer to launching Snippet Beta.</p>

                <Link className="mt-4" to="/">Visit the homepage</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default LoggedOutPage;
