import React from 'react';
import {
  Link as RRLink,
} from 'react-router-dom';
import {
  Col,
  Row,
  Button,
} from 'reactstrap';

import FetchError from 'components/fetchError';
import Breadcrumb from 'components/breadcrumb';
import { CircleLoading } from 'components/loading';
import Form from './../components/registerSchoolForm';
import { getSchoolProgramsUrl } from 'helpers/url';
import style from './style.scss';


const WithoutSchools = ({ children }) => {
  return (
    <div>
      <h1 className="h3 mb-4">Thank you for signing up to Snippet</h1>

      <p>Before you start, please select your school:</p>

      {children}
    </div>
  )
};

const ExistingSchools = ({ children, schools }) => {
  return (
    <div>
      <h1 className="h3 mb-4">Please select your school</h1>

      <p>Your schools:</p>

      <div className={style.currentSchoolsList}>
        {schools.map((school, idx) => (
          <Button className={style.currentSchoolsListItem} key={idx} to={getSchoolProgramsUrl(school.code, '2018')} tag={RRLink} block color="light">
            {school.name}
          </Button>
        ))}
      </div>

      <p>Can't see your school in the list? Find it here:</p>

      {children}
    </div>
  )
};


class RegistrationFlow extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { userSchoolCodes, schools } = this.props;

    if (userSchoolCodes.length && !schools.length) {  // only if I have schools, fetch them
      this.props.fetchSchools(userSchoolCodes);
    }
  }

  render() {
    const {
      schools,
      isFetchingSchools,
      errorMessageSchools,
      onSubmitSuccess,
      userSchoolCodes,
    } = this.props;

    if (userSchoolCodes.length && isFetchingSchools !== false) {
      return <CircleLoading />
    }

    const Template = schools.length ? ExistingSchools : WithoutSchools;

    return (
      <div>
        <Breadcrumb items={[
          { label: 'Programs', to: schools.length ? '/account/schools' : null },
          { label: 'Register school' }
        ]} />

      <Row>
        <Col sm={{size: 8, offset: 2}} md={{size: 6, offset: 3}}>

          {errorMessageSchools &&
            <FetchError message={errorMessageSchools} name="Schools" onRetry={this.fetchData} />
          }

          <Template schools={schools}>
            <Form onSubmitSuccess={onSubmitSuccess}
                  autoFocus={!!schools.length === false}
            />
          </Template>
        </Col>
      </Row>
      </div>
    )
  }
}

export default RegistrationFlow;
