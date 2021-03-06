import React from 'react';
import { withFormik } from 'formik';
import {
  Form,
  FormGroup,
  Button,
  Label,
  Col,
} from 'reactstrap';
import get from 'lodash/get';
import Bows from 'bows';

import FieldSelect from "components/fieldSelect";

const log = Bows('F: QuickAddProgram');


const QuickAddProgramForm = ({
                               optionsPrograms,

                               handleSubmit,
                               values,
                               setFieldValue,
                               setFieldTouched,
                               errors,
                               touched,
                               isSubmitting,
                             }) => {
  return (
    <div>
      <FormGroup>
        <Label>Search program name</Label>
        <Form inline noValidate={true} onSubmit={handleSubmit}>
          <FormGroup row style={{width:'100%'}}>
            <Col sm={{size:10}}>
              <FieldSelect name="name"
                           value={values.name}
                           invalid={errors.name}
                           touched={touched.name}
                           options={optionsPrograms}
                           onChange={setFieldValue}
                           onBlur={setFieldTouched}
                           searchable={true}
                           disabled={isSubmitting}
                           clearable={false}
              />
            </Col>
            <Col sm={{size:2}}>
              <Button type="submit" color="primary" disabled={isSubmitting}>Add</Button>
            </Col>
          </FormGroup>
        </Form>
      </FormGroup>
    </div>
  )
};

export default withFormik({
  displayName: 'quickAddSchoolProgram',
  mapPropsToValues: (props) => {
    return {
      name: get(props, 'model.name', ''),
    };
  },
  validate: (values, props) => {
    const errors = {};

    if (!values.name) {
      return errors.name = 'Required';
    }

    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
      resetForm,
    }
  ) => {
    const newProgram = {...props.model};
    newProgram.name = values.name;

    log(`submitting - ${JSON.stringify(newProgram)}`);

    return props.onSubmit(newProgram).then(
      resp => {
        log(`success - ${JSON.stringify(resp)}`);
        setSubmitting(false);
        return resp;
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
        return errors;
      }
    ).then((p) => {
      props.onSubmitSuccess && props.onSubmitSuccess(p);
      resetForm();
    });
  }
})(QuickAddProgramForm);

