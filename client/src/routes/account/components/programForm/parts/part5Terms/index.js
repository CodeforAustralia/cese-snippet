import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldCheckboxList from 'components/fieldCheckboxList';
import IndexedPartLayout from './../../indexedPartLayout';

const Part5Terms = ({
                      index,
                      totalIndex,
                      values,
                      errors,
                      optionsTerms,
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="terms">Terms Delivered</Label>
            <FieldCheckboxList name="terms"
                               value={values.terms}
                               options={optionsTerms}
                               error={errors.terms}
                               inline={true}
            />
          </Col>
        </FormGroup>

        <FormGroup hidden>
          <Label htmlFor="year">Year delivered</Label>
          <FieldTextInput name="year" />
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part5Terms;
