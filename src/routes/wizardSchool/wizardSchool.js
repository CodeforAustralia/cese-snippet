import React from 'react';
import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

const WizardSchool = () => {
  return (
    <Layout nextTo="/register/school-programs">
      <ArrowBreadcrumb linkList={[
        { to: '/register/school', label: '1', active: true },
        { to: '/register/school-programs', label: '2', disabled: true },
      ]} />
      <h1>Select your school</h1>
    </Layout>
  )
};

export default WizardSchool;
