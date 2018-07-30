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

const log = Bows('Form - Register School Program');


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
        <Label>Enter program name</Label>
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
  displayName: 'registerSchoolProgram',
  mapPropsToValues: (props) => {
    return {
      name: get(props, 'model.name', ''),
    };
  },
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
    const newProgram = {...props.model};
    newProgram.name = values.name;

    log(`submitting - ${JSON.stringify(newProgram)}`);
    props.setContainerState({
      isSubmitting: true,
    });

    return props.onSubmit(newProgram).then(
      resp => {
        log(`success - ${JSON.stringify(resp)}`);
        props.setContainerState({
          hasSubmitted: true,
          isSubmitting: false,
        });
        setSubmitting(false);
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
      }
    )
  }
})(QuickAddProgramForm);

