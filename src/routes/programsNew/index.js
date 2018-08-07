import React from 'react';
import { Button } from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import Layout from "layouts/app";
import Breadcrumb from "components/breadcrumb";
import { getSchoolProgramsUrl } from "helpers/url";


const ProgramsNew = ({ school, year }) => {
  return (
    <Layout>
      <Breadcrumb items={[
        { label: 'Programs' },
        { label: school.name },
        { label: 'New Snippet' },
      ]} />

      <div>
        <h1>New Program</h1>

        <Button color="link" tag={RRLink} to={getSchoolProgramsUrl(school.code, year)}>{`< `}Back to {school.name}</Button>
      </div>
    </Layout>
  )
};

export default ProgramsNew;
