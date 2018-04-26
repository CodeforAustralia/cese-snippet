import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
} from 'reactstrap';

import Loading from 'components/loading';
import Form from './../components/registerSchoolForm';
import { getSchoolProgramsUrl } from 'helpers/url';


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
      return <Loading />
    }

    return (
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <Link to="/account">{`< Programs`}</Link>
          <br />
          <br />
          <h1>Your schools</h1>
          <p>Before you can view your school's programs, we need you to choose the schools that you belong to.</p>

          <p>Your current schools are:</p>
          {schools.length ?
            <ul>
              {schools.map((school, idx) => (
                <li key={idx}>
                  <Link to={getSchoolProgramsUrl(school.code, '2018')}>{school.name}</Link>
                </li>
              ))}
            </ul> :
            <p>You currently have no schools registered.</p>
          }

          <br />

          <p>{schools.length ?
            'Register another school' :
            'Find your school'
          }</p>

          <Form onSubmitSuccess={onSubmitSuccess} />

        </Col>
      </Row>
    )
  }
}

export default RegistrationFlow;
