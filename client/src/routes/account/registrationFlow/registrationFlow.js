import React from 'react';
import { Link } from 'react-router-dom';

import Form from './../components/registerSchoolForm';


class RegistrationFlow extends React.Component {
  componentDidMount() {
    const { userSchoolCodes, schools } = this.props;
    if (userSchoolCodes && !schools.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }
  render() {
    const {
      schools,
      isFetching,
      onSubmitSuccess,
    } = this.props;

    if (isFetching !== false) {
      return <p style={{border:'1px solid red'}}>Loading...</p>
    }

    return (
      <div>
        <h1>RegistrationFlow</h1>

        <Link to="/account">Close</Link>

        <h2>Your current schools</h2>
        {schools.length ?
          <ul>
            {schools.map((school, idx) => (
              <li key={idx}>{school.name}</li>
            ))}
          </ul> :
          <p>You currently have no schools registered.</p>
        }

        <h2>Register a new school</h2>

        <Form onSubmitSuccess={onSubmitSuccess} />

      </div>
    )
  }
}

export default RegistrationFlow;
