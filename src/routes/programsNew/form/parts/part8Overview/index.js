import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextareaInput from 'components/fieldTextAreaInput';
import IndexedPartLayout from './../../indexedPartLayout';

const Part8Overview = ({
                         index,
                         totalIndex,
                         values,
                         errors,
                       }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="description" className="mb-1">Program Overview</Label>
            <FormText color="muted" className="mt-0 mb-2">
              Describe the program in a nutshell?
            </FormText>
            <FieldTextareaInput name="description"
                                error={errors.description}
                                rows={6}
            />
          </Col>
        </FormGroup>

      </div>
    </IndexedPartLayout>
  )
};

export default Part8Overview;
