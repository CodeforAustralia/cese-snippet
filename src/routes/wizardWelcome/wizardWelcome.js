import React from 'react';
import Layout from 'layouts/wizard';
import {
  Col,
  Row,
} from 'reactstrap';

import { getRegisterSchoolUrl } from "helpers/url";

const WizardWelcome = ({ sessionUser }) => {
  return (
    <Layout nextTo={getRegisterSchoolUrl()}>
      <Row>
        <Col md={{span: 8}}>
          <h1 className="h2 mb-5">Hi {sessionUser.firstName},</h1>
          <p>Welcome to Snippet! and thank you for being part of the Snippet community.</p>
          <p>Snippet allows you to: </p>
          <ol>
            <li>View and keep up to date with programs and initiatives for your school.</li>
            <li>Add new programs or update any that exist.</li>
            <li>See what programs and initiatives other schools are implementing.</li>
          </ol>
          <p>- CESE</p>
        </Col>
      </Row>
    </Layout>
  )
};

export default WizardWelcome;
