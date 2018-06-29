import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import IndexedPartLayout from './../../indexedPartLayout';

const Part2Name = ({
                     index,
                     totalIndex,
                   }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="name">Program Name</Label>
            <FieldTextInput name="name" />
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part2Name;
