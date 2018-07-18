import React from 'react';
import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';

const WizardSchoolPrograms = () => {
  return (
    <Layout prevTo="/register/school" nextTo="/schools">
      <ArrowBreadcrumb linkList={[
        { to: '/register/school', label: '1' },
        { to: '/register/school-programs', label: '2', active: true },
      ]} />
      <h1>Select programs and initiatives that happen at your school</h1>
    </Layout>
  )
};

export default WizardSchoolPrograms;
