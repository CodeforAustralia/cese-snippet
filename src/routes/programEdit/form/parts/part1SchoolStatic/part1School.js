import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import IndexedPartLayout from './../../indexedPartLayout';


class Part1School extends React.Component {

  render() {
    const {
      school,

      index,
      totalIndex,
    } = this.props;

    return (
      <IndexedPartLayout index={index} totalIndex={totalIndex}>
        <div>
          <FormGroup row>
            <Col md={8}>
              <Label htmlFor="code">School</Label>
              <p>{school.name}</p>
            </Col>
          </FormGroup>
        </div>
      </IndexedPartLayout>
    )
  }
}

export default Part1School;
