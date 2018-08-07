import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import IndexedPartLayout from './../../indexedPartLayout';
import { getYear } from 'helpers/dateFormats';

const Part5Terms = ({
                      index,
                      totalIndex,
                      values,
                      errors,
                      optionsTerms,
                      setFieldValue,
                      year = getYear(),
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="terms">Terms Delivered in {year}</Label>
            <FieldRadioBtnList name="terms"
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
          <FieldTextInput name="year" value={year} disabled={true} hidden />
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part5Terms;