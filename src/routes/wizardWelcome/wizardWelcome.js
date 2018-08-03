import React from 'react';
import Layout from 'layouts/wizard';
import {
  Col,
  Row,
} from 'reactstrap';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

import {
  getOnboardingWelcomeUrl,
  getOnboardingSchoolUrl,
  getOnboardingSchoolProgramsUrl
} from "helpers/url";

const OnboardingWelcomeUrl = getOnboardingWelcomeUrl();
const OnboardingSchoolUrl = getOnboardingSchoolUrl();
const OnboardingSchoolProgramsUrl = getOnboardingSchoolProgramsUrl();

const WizardWelcome = ({ sessionUser }) => {
  return (
    <Layout nextTo={OnboardingSchoolUrl}>
      <ArrowBreadcrumb linkList={[
        { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: true, active: true, },
        { to: OnboardingSchoolUrl, label: '2', visited: false, disabled: true, },
        { to: OnboardingSchoolProgramsUrl, label: '3', visited: false, disabled: true },
      ]} />
      <Row>
        <Col md={{size: 8}}>
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
