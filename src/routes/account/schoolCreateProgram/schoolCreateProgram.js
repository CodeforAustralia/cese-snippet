import React from 'react';
import { Redirect } from 'react-router';

import FetchError from 'components/fetchError';
import Breadcrumb from 'components/breadcrumb';
import Loading from 'components/loading';
import { CreateForm as Form } from './../components/programForm';
import { getSchoolProgramsUrl } from 'helpers/url';


class SchoolCreateProgram extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { schools, userSchoolCodes } = this.props;

    if (userSchoolCodes.length && (!schools || !schools.length)) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }

  render() {
    const {
      history,
      schools,
      isFetchingSchools,
      userSchoolCodes,
      errorMessageSchools,
    } = this.props;

    if (!userSchoolCodes.length) {
      return <Redirect to="/account/register"/>;
    }

    if (isFetchingSchools !== false) {
      return <Loading/>
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

        {errorMessageSchools &&
          <FetchError message={errorMessageSchools} name="Schools" onRetry={this.fetchData} />
        }

        <p>Tell us about a school program in a nutshell, or be as detailed as you want.</p>
        <p className="mb-4">Contributing to the list of program in your school is the first step in helping create awareness about your programs and initiatives for the school community.</p>

        <Form onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
