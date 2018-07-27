import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import Layout from 'layouts/wizard';
import ArrowBreadcrumb from 'components/arrowBreadcrumb';
import Form from './form';
import { CircleLoading } from 'components/loading';

class WizardSchool extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerState = this.setContainerState.bind(this);
    this.state = {
      hasSubmitted: false,
      isSubmitting: false,
      isError: false,
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
      hasSubmitted,
    } = this.state;

    return (
      <Layout nextTo="/register/school-programs" activateNext={!isSubmitting && hasSubmitted}>
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
                    setContainerState={this.setContainerState}
                    model={sessionUser}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            {isSubmitting && <CircleLoading />}
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default WizardSchool;
