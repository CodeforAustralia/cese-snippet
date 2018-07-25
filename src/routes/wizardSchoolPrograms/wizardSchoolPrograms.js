import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

const WizardSchoolPrograms = () => {
  return (
    <Layout prevTo="/register/school" nextTo="/schools">
      <ArrowBreadcrumb linkList={[
        { to: '/register/school', label: '1' },
        { to: '/register/school-programs', label: '2', active: true },
      ]} />

      <Row className="mt-5">
        <Col>
          <h1 className="h2">Which programs and initiatives are happening at your school?</h1>
        </Col>
      </Row>
    </Layout>
  )
};

export default WizardSchoolPrograms;
