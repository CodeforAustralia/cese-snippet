import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import Form from './form';

const WizardSchool = ({ optionsSchools }) => {
  return (
    <Layout nextTo="/register/school-programs">
      <ArrowBreadcrumb linkList={[
        { to: '/register/school', label: '1', active: true },
        { to: '/register/school-programs', label: '2', disabled: true },
      ]} />

      <Row className="mt-5">
        <Col>
          <h1 className="h2">Select your school</h1>
          <div className="mt-4">
            <Form optionsSchools={optionsSchools} />
          </div>
        </Col>
      </Row>
    </Layout>
  )
};

export default WizardSchool;
