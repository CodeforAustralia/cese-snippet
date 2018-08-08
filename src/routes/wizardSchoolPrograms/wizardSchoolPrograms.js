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
import {PageLoading} from "../../components/loading/index";


const log = Bows('View: WizSchoolPrograms');

const OnboardingWelcomeUrl = getOnboardingWelcomeUrl();
const OnboardingSchoolUrl = getOnboardingSchoolUrl();
const OnboardingSchoolProgramsUrl = getOnboardingSchoolProgramsUrl();

class WizardSchoolPrograms extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnButtonAdd = this.handleOnButtonAdd.bind(this);
    this.state = {
      isSubmitting: false,
    }
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
    this.setState({ isSubmitting: true });
    const data = {
      ...program,
      schoolCode: this.props.school.code,
      year: '2018',
    };
    return this.props.onAddProgram(data).then(() => {
      this.setState({ isSubmitting: false });
    });
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

    const { isSubmitting } = this.state;

    const isLoaded = isFetchingSchool === false && isFetchingProgramTemplates === false && isFetchingSchoolPrograms === false;
    const isLoading = !(isLoaded);

    return (
      <Layout nextTo="/schools"
              nextText="Complete sign up"
              activateNext={!isSubmitting}>
        <ArrowBreadcrumb linkList={[
          { to: OnboardingWelcomeUrl, label: '1', visited: true, disabled: false, },
          { to: OnboardingSchoolUrl, label: '2', visited: true, disabled: false, },
          { to: OnboardingSchoolProgramsUrl, label: '3', visited: true, disabled: true, active: true, },
        ]} />

        {isSubmitting ? <PageLoading blocking={true} /> : ''}

        {isLoading ?
          <ComponentLoading innerPage={true} /> :
          <Row className="mt-5">
            <Col>
              <h1 className="h2">Which programs and initiatives are happening at {school.name}?</h1>

              <div className="mt-4">
                <Row>
                  <Col md={{size: 4}}>
                    <div>
                      <div className="mb-4">
                        <QuickAddProgramForm optionsPrograms={optionsProgramTemplates || []}
                                             model={{
                                               schoolCode: school.code,
                                               year: '2018',
                                             }}
                                             onBeforeSubmit={() => this.setState({ isSubmitting: true })}
                                             onSubmit={onAddProgram}
                                             onSubmitSuccess={() => this.setState({ isSubmitting: false })}
                        />
                      </div>

                      <div>
                        <Label>Or, select from these popular programs</Label>
                        <div>
                          <ul className={cx(
                            style.buttonListToAdd,
                            'list-unstyled'
                          )}>
                            {suggestedPrograms && suggestedPrograms.map((program, idx) => (
                              <li className={style.buttonListItem} key={idx}>
                                <Button className={style.buttonListItemButton}
                                        color="primary"
                                        outline={true}
                                        size="sm"
                                        onClick={() =>  this.handleOnButtonAdd(program)}
                                >{program.name}</Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col md={{size: 8}}>
                    <Card body>
                      <h2 className="h5">Current programs and initiatives {schoolPrograms && schoolPrograms.length > 1 ? <span>({schoolPrograms.length})</span> : null}</h2>
                      <p>This is the list of programs or initiatives that have been added to your school this year.</p>
                      {schoolPrograms && schoolPrograms.length ?
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
        }
      </Layout>
    )
  }
}

export default WizardSchoolPrograms;
