import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextareaInput from 'components/fieldTextAreaInput';

const Part7Aim = ({
                    values,
                    errors,
                  }) => {
  return (
    <div>
      <FormGroup row>
        <Col md={8}>
          <Label htmlFor="aims" className="mb-1">Aim</Label>
          <FormText color="muted" className="mt-0 mb-2">
            What does the program hopes to achieve?
          </FormText>
          <FieldTextareaInput name="aims"
                              error={errors.aims}
                              rows={6}
          />
        </Col>
      </FormGroup>
    </div>
  )
};

export default Part7Aim;
