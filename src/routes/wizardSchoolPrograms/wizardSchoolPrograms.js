import React from 'react';
import {
  Col,
  Row,
  Label,
  Button,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import QuickAddProgramForm from './form';

class WizardSchoolPrograms extends React.Component {

  constructor(props) {
    super(props);
    this.setContainerState = this.setContainerState.bind(this);
    this.handleOnButtonAdd = this.handleOnButtonAdd.bind(this);
    this.state = {
      isSubmitting: false,
      isError: false,
      hasSchool: this.props.sessionUserSchool && this.props.sessionUserSchool.name,
    }
  }

  setContainerState(props) {
    this.setState({...this.state, ...props});
  }

  componentDidMount() {
    this.fetchData();
  }

  // componentDidUpdate(prevProps) {
  //   if (JSON.stringify(prevProps.filterProps) !== JSON.stringify(this.props.filterProps)) {
  //     this.fetchData();
  //   }
  // }

  fetchData() {
    this.props.fetchSchoolPrograms(this.props.school.code);
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
      schoolPrograms,
      isFetchingSchoolPrograms,
      suggestedPrograms,
      onAddProgram,
      optionsProgramTemplates,
    } = this.props;

    const {
      isSubmitting,
    } = this.state;

    return (
      <Layout prevTo="/register/school"
              nextTo="/schools"
              activateNext={!isSubmitting}
              nextText="Complete sign up">
        <ArrowBreadcrumb linkList={[
          { to: '/register/school', label: '1', visited: true, disabled: false, },
          { to: '/register/school-programs', label: '2', visited: true, disabled: true, active: true, },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Which programs and initiatives are happening at your {school.name}?</h1>

            <div className="mt-4">
              <Row>
                <Col md={{size: 6}}>
                  <div className="mb-5">
                    <QuickAddProgramForm optionsPrograms={optionsProgramTemplates}
                                         onSubmit={onAddProgram}
                                         model={{
                                           schoolCode: school.code,
                                           year: '2018',
                                         }}
                                         setContainerState={this.setContainerState}
                    />
                  </div>

                  <div>
                    <Label className="h5">Or, select from these popular programs</Label>
                    <div>
                      <ul>
                        {suggestedPrograms.map((program, idx) => {
                          return (
                            <li key={idx}><Button color="link" onClick={() => this.handleOnButtonAdd(program)}>{program.name}</Button></li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col md={{size: 6}}>
                  <h2 className="h5">Current programs and initiatives {schoolPrograms && schoolPrograms.length ? <span> ({!isFetchingSchoolPrograms && schoolPrograms.length})</span> : null}</h2>
                  <p>This is the list of programs or initiatives that have been added to your school this year.</p>

                  {schoolPrograms ?
                    <div>
                      <ul>
                        {schoolPrograms.map((p, idx) => {
                          return (
                            <li key={idx}>{p.name}</li>
                          )
                        })}
                      </ul>
                    </div> :
                    <p className="text-light">There are no programs recorded yet.</p>
                  }
                  {isFetchingSchoolPrograms && <p>Loading...</p>}
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
