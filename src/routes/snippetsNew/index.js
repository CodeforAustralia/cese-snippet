import React from 'react';
// import { Button } from 'reactstrap';
// import { Link as RRLink } from 'react-router-dom';

import Layout from "layouts/app";
// import Breadcrumb from "components/breadcrumb";
// import { getSchoolProgramsUrl } from "helpers/url";


const SnippetsNew = ({ school, year }) => {
  return (
    <Layout>
      {/*<Button color="link" tag={RRLink} to={programUrl} className="pl-0">{`< ${program.name}`}</Button>*/}

      <div>
        <h1>New Snippet</h1>

        {/*<Button color="link" tag={RRLink} to={getSchoolProgramsUrl(school.code, year)}>{`< `}Back to {school.name}</Button>*/}
      </div>
    </Layout>
  )
};

export default SnippetsNew;
