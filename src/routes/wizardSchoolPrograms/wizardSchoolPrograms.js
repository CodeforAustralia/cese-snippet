import React from 'react';
import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

const WizardSchoolPrograms = () => {
  return (
    <Layout prevTo="/register/school" nextTo="/schools">
      <ArrowBreadcrumb linkList={[
        { to: '/', label: '1' },
        { to: '/', label: '2', active: true, },
      ]} />
      <h1>Select programs and initiatives that happen at your school</h1>
    </Layout>
  )
};

export default WizardSchoolPrograms;
