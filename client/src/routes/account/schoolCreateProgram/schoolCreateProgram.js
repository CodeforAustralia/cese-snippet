import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

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
      return <p>Loading ...</p>
    }

    if (!schools || !schools.length) {
      return <p>No schools</p>
    }

    return (
      <div>
        <p><Link to="/account">{`< Programs`}</Link></p>

        <h1>Add a Program</h1>

        <Form onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
