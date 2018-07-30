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

  render() {
    const {
      schoolPrograms,
      isFetchingSchoolPrograms,
      suggestedPrograms,
    } = this.props;

    return (
      <Layout prevTo="/register/school" nextTo="/schools">
        <ArrowBreadcrumb linkList={[
          { to: '/register/school', label: '1' },
          { to: '/register/school-programs', label: '2', active: true },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Which programs and initiatives are happening at your school?</h1>

            <div className="mt-4">
              <Row>
                <Col md={{size: 6}}>
                  <div className="mb-5">
                    <QuickAddProgramForm />
                  </div>

                  <div>
                    <Label className="h5">Or, select from these popular programs</Label>
                    <div>
                      <ul>
                        {suggestedPrograms.map((p, idx) => {
                          return (
                            <li key={idx}><Button color="link">{p.name}</Button></li>
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
