import React from 'react';
import { withFormik } from 'formik';
import Bows from 'bows';
import {
  Form,
  FormGroup,
  Label,
  Col,
} from 'reactstrap';

import FieldSelect from "components/fieldSelect";

const log = Bows('Form - Register School');

const RegisterSchoolForm = ({
                              optionsSchools,
                              handleSubmit,
                              values,
                              setFieldValue,
                              setFieldTouched,
                              errors,
                              touched,
                            }) => {
  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      <FormGroup className="no-gutters">
        <Col md={{size:10}}>
          <Label htmlFor="schoolCode">Choose school</Label>
          <FieldSelect name="schoolCode"
                       value={values.schoolCode}
                       options={optionsSchools}
                       onChange={setFieldValue}
                       onBlur={setFieldTouched}
                       invalid={errors.schoolCode}
                       touched={touched.schoolCode}
                       autoFocus={true}
          />
        </Col>
      </FormGroup>
    </Form>
  )
};

export default withFormik({
  displayName: 'registerSchool',
  validate: (values, props) => {
    const errors = {};
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    log(`submitting - ${JSON.stringify(values)}`);
    props.onSubmit(values).then(
      resp => {
        log(`success - ${JSON.stringify(resp)}`);
        props.activateNext(true);
        setSubmitting(false);
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
      }
    )
  }
})(RegisterSchoolForm);
