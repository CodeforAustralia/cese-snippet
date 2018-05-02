import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
} from 'reactstrap';

import { CircleLoading } from 'components/loading';
import Form from './../components/registerSchoolForm';
import { getSchoolProgramsUrl } from 'helpers/url';



const WithoutSchools = ({ children }) => {
  return (
    <div>
      <h1 className="h3 mb-2">Thank you for signing up to Snippet.</h1>
      <p>Before you start, please search for your school.</p>

      {children}
    </div>
  )
};

const ExistingSchools = ({ children, schools }) => {
  return (
    <div>
      <h1 className="h3">Your schools</h1>

      <ul>
        {schools.map((school, idx) => (
          <li key={idx}>
            <Link to={getSchoolProgramsUrl(school.code, '2018')}>{school.name}</Link>
          </li>
        ))}
      </ul>

      <p>Can't see your school in the list?</p>

      <p>Add any missing school.</p>

      {children}
    </div>
  )
};


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
      return <CircleLoading />
    }

    const Template = schools.length ? ExistingSchools : WithoutSchools;

    return (
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <Link to="/account">{`< Programs`}</Link>
          <br />
          <br />

          <Template schools={schools}>
            <Form onSubmitSuccess={onSubmitSuccess} autoFocus={true} />
          </Template>

        </Col>
      </Row>
    )
  }
}

export default RegistrationFlow;
