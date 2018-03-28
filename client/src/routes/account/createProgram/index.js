import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import Form from './../components/programForm/create';

class CreateProgram extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <h1>Create Program</h1>
          <Form />
        </Col>
      </Row>
    )
  }
}

export default CreateProgram;
