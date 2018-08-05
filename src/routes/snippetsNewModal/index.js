import React from 'react';

import Layout from "layouts/modal";
import Breadcrumb from "components/breadcrumb";


const SnippetsNewModal = ({ school, year }) => {
  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Programs' },
        { label: school.name },
        { label: 'New Snippet' },
      ]} />

      <div>
        <h1>New Snippet</h1>
      </div>
    </Layout>
  )
};

export default SnippetsNewModal;
