import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  // FormFeedback
} from 'reactstrap';
import FieldCode from './../../../../components/fieldCode';
import IndexedPartLayout from './../../indexedPartLayout';

const Part1School = ({
                       index,
                       totalIndex,
                       values,
                       errors,
                       touched,
                       optionsSchoolCodes,
                       isDisabled=false,
                       setFieldValue,
                       setFieldTouched,
                     }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
          <Label htmlFor="code">School</Label>
          <FieldCode name="code"
            id="code"
            disabled={isDisabled}
            options={optionsSchoolCodes}
            value={values.code}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            touched={touched.code}
            error={errors.code}
            className={errors.code && 'is-invalid'}
          />
          {/*{errors.code <FormFeedback>{errors.code}</FormFeedback>}*/}
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part1School;
