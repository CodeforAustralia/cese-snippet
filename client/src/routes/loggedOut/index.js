import React from 'react';
import {
  Row,
  Col,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Layout from 'layouts/home';
import GiveFeedbackEmbed from 'components/giveFeedbackEmbed';
import style from './style.scss';


const LoggedOutPage = () => (
  <Layout pad={true}>
    <Container>
      <Row>
        <Col sm={{size: 12}} md={{size:8, offset:2}}>
          <p className={style.breadcrumb}>You are logged out of Snippet.</p>

          <h1 className="h2 mb-4">Thank you for being part of&nbsp;Snippet</h1>

          <p>Please come back anytime and tell all of your colleagues!</p>

          <GiveFeedbackEmbed link={process.env.REACT_APP_TYPEFORM_APP} />

          <div className="mt-4 mb-4">
            <Link to="/">Back to home</Link>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default LoggedOutPage;

