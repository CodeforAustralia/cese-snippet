import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import Bows from 'bows';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import Form from './form';
import {
  getOnboardingWelcomeUrl,
  getOnboardingSchoolUrl,
  getOnboardingSchoolProgramsUrl
} from "helpers/url";
import { ComponentLoading } from "components/loading";


const log = Bows('V: WizSchool');

const OnboardingWelcomeUrl = getOnboardingWelcomeUrl();
const OnboardingSchoolUrl = getOnboardingSchoolUrl();
const OnboardingSchoolProgramsUrl = getOnboardingSchoolProgramsUrl();

class WizardSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSubmitted: false,
    }
  }

  componentDidMount() {
    const { schools, isFetchingSchools, fetchSchools } = this.props;
    if ((!schools || !schools.length) || isFetchingSchools !== true) {
      log('fetching schools');
      fetchSchools();
    }
  }

  render() {
    const {
      optionsSchools,
      onSubmit,
      sessionUser,
      isFetchingSchools,
    } = this.props;
    const { hasSubmitted } = this.state;

    return (
      <Layout nextTo={OnboardingSchoolProgramsUrl}
              activateNext={!(!hasSubmitted && isFetchingSchools !== false) && sessionUser.schools.length}>
        <ArrowBreadcrumb linkList={[
          { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: false, },
          { to: OnboardingSchoolUrl, label: '2', visited: true,  disabled: true, active: true, },
          { to: OnboardingSchoolProgramsUrl, label: '3', visited: false,  disabled: true, },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Select your school</h1>
            <div className="mt-4">
              {isFetchingSchools !== false ?
                <ComponentLoading /> :
                <Form optionsSchools={optionsSchools}
                      onSubmit={onSubmit}
                      onSubmitSuccess={() => this.setState({hasSubmitted: true})}
                      model={sessionUser}
                />
              }
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default WizardSchool;
