import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextareaInput from 'components/fieldTextAreaInput';

const Part8Overview = ({
                         values,
                         errors,
                       }) => {
  return (
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
  )
};

export default Part8Overview;
