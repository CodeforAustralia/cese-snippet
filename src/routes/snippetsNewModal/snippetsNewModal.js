import React from 'react';

import Layout from "layouts/modal";


const SnippetsNewModal = ({ history, school, year }) => {

  const goBack = () => history.goBack();

  return (
    <Layout goBack={goBack}>
      <div>
        <p>Modal copy</p>
      </div>
    </Layout>
  )
};

export default SnippetsNewModal;
