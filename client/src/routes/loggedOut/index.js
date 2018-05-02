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
          <Col sm={{size: 8, offset: 2}} md={{size: 6, offset: 3}}>
            <div className={style.loggedOutContainer}>

              <p className={style.breadcrumb}>You are logged out of Snippet.</p>

              <h1 className="h2 mb-4">Thank you for being part of&nbsp;Snippet</h1>

              <p>Please come back anytime and tell all of your colleagues!</p>

              <p>If you have the time, we'd love to know how your overall experience of Snippet was today.</p>
              <div className={style.formPanel}>
                <Form />
              </div>

              <div className="mb-4">
                <Link to="/">{`Back to home`}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className={cx(style.snippetBetaBand, 'mt-4 mb-5')}>
        <Container>
          <Row>
            <Col>
              <p>Amazing things are coming! <Link to="/whats-next" className="text-brand-primary">Find out about Snippet Beta</Link>.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
};

export default LoggedOutPage;
