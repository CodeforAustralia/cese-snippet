import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import Form from './form';
import {
  getOnboardingWelcomeUrl,
  getOnboardingSchoolUrl,
  getOnboardingSchoolProgramsUrl
} from "helpers/url";


const OnboardingWelcomeUrl = getOnboardingWelcomeUrl();
const OnboardingSchoolUrl = getOnboardingSchoolUrl();
const OnboardingSchoolProgramsUrl = getOnboardingSchoolProgramsUrl();

class WizardSchool extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerState = this.setContainerState.bind(this);
    this.state = {
      isSubmitting: false,
      isError: false,
      hasSchool: this.props.sessionUserSchool && this.props.sessionUserSchool.name,
    }
  }
  setContainerState(props) {
    this.setState({...this.state, ...props});
  }
  render() {
    const {
      optionsSchools,
      onSubmit,
      sessionUser,
    } = this.props;
    const {
      isSubmitting,
      hasSchool,
    } = this.state;

    return (
      <Layout nextTo={OnboardingSchoolProgramsUrl} activateNext={hasSchool && !isSubmitting}>
        <ArrowBreadcrumb linkList={[
          { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: false, },
          { to: OnboardingSchoolUrl, label: '2', visited: true,  disabled: true, active: true, },
          { to: OnboardingSchoolProgramsUrl, label: '3', visited: false,  disabled: true, },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Select your school</h1>
            <div className="mt-4">
              <Form optionsSchools={optionsSchools}
                    onSubmit={onSubmit}
                    setContainerState={this.setContainerState}
                    model={sessionUser}
              />
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default WizardSchool;
