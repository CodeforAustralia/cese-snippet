import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextareaInput from 'components/fieldTextAreaInput';
import IndexedPartLayout from './../../indexedPartLayout';

const Part7Aim = ({
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
            <Label htmlFor="aims">Aim</Label>
            <FieldTextareaInput name="aims"
                                error={errors.aims}
                                rows={6}
            />
            <FormText color="muted">
              What does the program hopes to achieve?
            </FormText>
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part7Aim;
