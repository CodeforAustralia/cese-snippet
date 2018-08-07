import React from 'react';
import cx from 'classnames';
import {
  Col,
  Row,
  Label,
  Card,
  Button,
} from 'reactstrap';
import Bows from 'bows';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import {
  getOnboardingWelcomeUrl,
  getOnboardingSchoolUrl,
  getOnboardingSchoolProgramsUrl
} from "helpers/url";
import QuickAddProgramForm from './form';

import style from './style.scss';
import { ComponentLoading } from "components/loading";


const log = Bows('View: WizSchoolPrograms');

const OnboardingWelcomeUrl = getOnboardingWelcomeUrl();
const OnboardingSchoolUrl = getOnboardingSchoolUrl();
const OnboardingSchoolProgramsUrl = getOnboardingSchoolProgramsUrl();

class WizardSchoolPrograms extends React.Component {

  constructor(props) {
    super(props);
    this.setContainerState = this.setContainerState.bind(this);
    this.handleOnButtonAdd = this.handleOnButtonAdd.bind(this);
    this.state = {
      isSubmitting: false,
      isError: false,
    }
  }

  setContainerState(props) {
    this.setState({...this.state, ...props});
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.school) !== JSON.stringify(this.props.school)) {
      this.fetchData();
    }
  }

  fetchData() {
    const {
      sessionUser,
      school,
      isFetchingSchools,
      schoolPrograms,
      isFetchingSchoolPrograms,
      optionsProgramTemplates,
      isFetchingProgramTemplates,
    } = this.props;

    if (!school && isFetchingSchools !== true) {
      log('fetch school');
      this.props.fetchSchool(sessionUser.schools[0]);
    }

    if (((!schoolPrograms || !schoolPrograms.length) && isFetchingSchoolPrograms !== true) && school ) {
      log('fetch schoolPrograms');
      this.props.fetchSchoolPrograms(school.code);
    }

    if ((!optionsProgramTemplates || !optionsProgramTemplates.length) && isFetchingProgramTemplates !== true) {
      log('fetch programTemplates');
      this.props.fetchProgramTemplates();
    }
  }

  handleOnButtonAdd(program) {
    const data = {
      ...program,
      schoolCode: this.props.school.code,
      year: '2018',
    };
    this.props.onAddProgram(data);
  }

  render() {
    const {
      school,
      isFetchingSchool,
      schoolPrograms,
      isFetchingSchoolPrograms,
      suggestedPrograms,
      onAddProgram,
      isFetchingProgramTemplates,
      optionsProgramTemplates,
    } = this.props;

    const {
      isSubmitting,
    } = this.state;

    return (
      <Layout prevTo={OnboardingSchoolUrl}
              nextTo="/schools"
              activateNext={!isSubmitting}
              nextText="Complete sign up">
        <ArrowBreadcrumb linkList={[
          { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: false, },
          { to: OnboardingSchoolUrl, label: '2', visited: true, disabled: false, },
          { to: OnboardingSchoolProgramsUrl, label: '3', visited: true, disabled: true, active: true, },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Which programs and initiatives are happening{isFetchingSchool !== false ? '?' : `at ${school.name}?`}</h1>

            <div className="mt-4">
              <Row>
                <Col md={{size: 4}}>
                  <div className="mb-4">
                    {isFetchingProgramTemplates !== false ?
                      <ComponentLoading /> :
                      <QuickAddProgramForm optionsPrograms={optionsProgramTemplates}
                                           onSubmit={onAddProgram}
                                           model={{
                                             schoolCode: school.code,
                                             year: '2018',
                                           }}
                                           setContainerState={this.setContainerState}
                      />
                    }
                  </div>

                  <div>
                    <Label>Or, select from these popular programs</Label>
                    <div>
                      <ul className={cx(
                        style.buttonListToAdd,
                        'list-unstyled'
                      )}>
                        {isFetchingProgramTemplates !== false ?
                          <ComponentLoading /> :
                          suggestedPrograms.map((program, idx) => (
                            <li className={style.buttonListItem} key={idx}>
                              <Button className={style.buttonListItemButton}
                                      color="primary"
                                      outline={true}
                                      size="sm"
                                      onClick={() =>  this.handleOnButtonAdd(program)}
                              >{program.name}</Button>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col md={{size: 8}}>
                  <Card body>
                    <h2 className="h5">Current programs and initiatives {schoolPrograms && schoolPrograms.length ? <span> ({!isFetchingSchoolPrograms && schoolPrograms.length})</span> : null}</h2>
                    <p>This is the list of programs or initiatives that have been added to your school this year.</p>

                    {isFetchingSchoolPrograms !== false ?
                      <ComponentLoading /> :
                         schoolPrograms && schoolPrograms.length ?
                          <div>
                            <ul className={cx(style.buttonList3Col, 'list-unstyled')}>
                              {schoolPrograms.map((program, idx) => (
                                <li className={style.buttonListItem} key={idx}>
                                  <p className={style.buttonListItemStatic}>
                                    {program.name}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div> :
                          <p className="text-muted">There are no programs recorded yet.</p>
                    }
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default WizardSchoolPrograms;
