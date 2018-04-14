import React from 'react';

// import Form from './form';

class RegistrationFlow extends React.Component {
  componentDidMount() {
    const { userSchoolCodes, schools } = this.props;
    if (userSchoolCodes && !schools.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
    this.props.fetchSchoolsList();
  }
  render() {
    const {
      schools,
      isFetching,
      schoolsListOptions,
    } = this.props;

    if (isFetching !== false) {
      return <p style={{border:'1px solid red'}}>Loading...</p>
    }

    return (
      <div>
        <h1>RegistrationFlow</h1>

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

        <p>Form</p>
        <code>{JSON.stringify(schoolsListOptions)}</code>

      </div>
    )
  }
}

export default RegistrationFlow;
