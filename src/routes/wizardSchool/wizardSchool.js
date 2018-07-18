import React from 'react';
import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

const WizardSchool = () => {
  return (
    <Layout nextTo="/register/school-programs">
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1' },
        { to: '/', label: '2', active: true, },
      ]} />
      <h1>Select your school</h1>
    </Layout>
  )
};

export default WizardSchool;
