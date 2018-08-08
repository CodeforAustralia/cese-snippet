import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldCheckboxBtnList from "components/fieldCheckboxBtnList";

const Part5Terms = ({
                      values,
                      errors,
                      optionsTerms,
                      setFieldValue,
                    }) => {
  return (
    <div>
      <FormGroup row>
        <Col md={8}>
          <Label htmlFor="terms">Terms Delivered in {values.year}</Label>
          <FieldCheckboxBtnList name="terms"
                             value={values.terms}
                             options={optionsTerms}
                             error={errors.terms}
                             inline={true}
                             onChange={setFieldValue}
          />
        </Col>
      </FormGroup>

      <FormGroup hidden>
        <Label htmlFor="year">Year delivered</Label>
        <FieldTextInput name="year" value={values.year} disabled={true} hidden />
      </FormGroup>
    </div>
  )
};

export default Part5Terms;
