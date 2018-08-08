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
      isSubmitting: false,
    }
  }

  componentDidMount() {
    const {
      optionsSchools,
      isFetchingSchools,
      fetchSchools
    } = this.props;

    if ((!optionsSchools || !optionsSchools.length) || isFetchingSchools === true) {
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
    const { isSubmitting } = this.state;

    return (
      <Layout nextTo={OnboardingSchoolProgramsUrl}
              activateNext={sessionUser.schools.length && !isSubmitting}>
        <ArrowBreadcrumb linkList={[
          { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: false, },
          { to: OnboardingSchoolUrl, label: '2', visited: true,  disabled: true, active: true, },
          { to: OnboardingSchoolProgramsUrl, label: '3', visited: false,  disabled: true, },
        ]} />

        {isFetchingSchools !== false ?
          <ComponentLoading innerPage={true} /> :
          <Row className="mt-5">
            <Col>
              <h1 className="h2">Select your school</h1>
              <div className="mt-4">
                  <Form optionsSchools={optionsSchools}
                        onBeforeSubmit={() => {
                          this.setState({ isSubmitting: true });
                        }}
                        onSubmit={onSubmit}
                        onSubmitSuccess={() => {
                          this.setState({ isSubmitting: false });
                        }}
                        model={sessionUser}
                  />
              </div>
            </Col>
          </Row>
        }
      </Layout>
    )
  }
}

export default WizardSchool;
