import React from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import {
  Link,
} from 'react-router-dom';
import cx from 'classnames';

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
                <p>You are logged out of Snippet.</p>

                <h1>Thank you for being part of&nbsp;<strong>Snippet</strong></h1>
              </div>

              <div className={style.feedbackContainer}>
                <h3 className="h5 pb-2">How was your overall experience of Snippet today?</h3>
                <Form />
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <div className={cx(style.snippetBetaBand, 'mt-4')}>
        <Container>
          <Row>
            <Col>
              <p>Amazing things are coming! <Link to="/whats-next">Find out about Snippet Beta</Link>.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
};

export default LoggedOutPage;
