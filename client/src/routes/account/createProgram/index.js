import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router';

import Form from './../components/programForm/create';

class CreateProgram extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Row>
        <Col>
          <Button color="link" onClick={() => this.goBack()}>{`<`} Back to Programs</Button>
          <h1>Create Program</h1>
          <Form />
        </Col>
      </Row>
    )
  }
}

export default withRouter(CreateProgram);
