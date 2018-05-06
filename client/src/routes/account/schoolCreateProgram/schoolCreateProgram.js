import React from 'react';
import { Redirect } from 'react-router';

import Breadcrumb from 'components/breadcrumb';
import Loading from 'components/loading';
import { CreateForm as Form } from './../components/programForm';
import { getSchoolProgramsUrl } from 'helpers/url';


class SchoolCreateProgram extends React.Component {

  componentDidMount() {
    const { schools, userSchoolCodes } = this.props;

    if (userSchoolCodes.length && (!schools || !schools.length)) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }

  render() {
    const {
      history,
      schools,
      isFetching,
      userSchoolCodes,
    } = this.props;

    if (!userSchoolCodes.length) {
      return <Redirect to="/account/register" />;
    }

    if (isFetching !== false) {
      return <Loading />
    }

    if (!schools || !schools.length) {
      return <p>No schools</p>
    }

    return (
      <div>
        <Breadcrumb items={[
          { label: 'Programs', to: '/account' },
          { label: 'Add Program' }
        ]} />

        <h1 className="mb-4">Add a program</h1>

        <p className="mb-4">[brief description about What this is and What is this for (why)].</p> {/* todo */}

        <Form onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
