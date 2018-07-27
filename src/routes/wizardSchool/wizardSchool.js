import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import Form from './form';

class WizardSchool extends React.Component {
  constructor(props) {
    super(props);
    this.activateNext = this.activateNext.bind(this);
    this.state = {
      activateNext: false,
    }
  }
  activateNext(v) {
    this.setState({activateNext: v});
  }
  render() {
    const {
      optionsSchools,
      onSubmit,
      sessionUser,
    } = this.props;
    const { activateNext } = this.state;
    return (
      <Layout nextTo="/register/school-programs" activateNext={activateNext}>
        <ArrowBreadcrumb linkList={[
          { to: '/register/school', label: '1', active: true },
          { to: '/register/school-programs', label: '2', disabled: true },
        ]} />

        <Row className="mt-5">
          <Col>
            <h1 className="h2">Select your school</h1>
            <div className="mt-4">
              <Form optionsSchools={optionsSchools}
                    onSubmit={onSubmit}
                    activateNext={this.activateNext}
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
