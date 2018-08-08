import React from 'react';
import { withFormik } from 'formik';
import {
  FormGroup,
  Button,
  Label,
  Col,
  Form,
} from 'reactstrap';
import Bows from 'bows';

import FieldSelect from "components/fieldSelect";
import FieldTextInput from "components/fieldTextInput";
import FieldTextAreaInput from "components/fieldTextAreaInput";


const log = Bows('F: ProgramEdit');

const ProgramEditForm = ({
                           optionsSchools,

                           handleSubmit,
                           values,
                           setFieldValue,
                           setFieldTouched,
                           errors,
                           touched,
                           isSubmitting,
                         }) => {
  return (
    <Form noValidate={true} onSubmit={handleSubmit}>

      <FormGroup>
        <Col md={8}>
          <Label htmlFor="schoolCode">School</Label>
          <FieldSelect name="schoolCode"
                       options={optionsSchools}
                       value={values.schoolCode}
                       onChange={setFieldValue}
                       onBlur={setFieldTouched}
                       error={errors.schoolCode}
                       disabled
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col md={4}>
          <Label htmlFor="year">Year</Label>
          <FieldTextInput name="year"
                          value={values.year}
                          error={errors.year}
                          disabled
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col md={8}>
          <Label htmlFor="description">Description</Label>
          <FieldTextAreaInput name="description"
                              error={errors.description}
                              rows={3}
          />
        </Col>
      </FormGroup>

      <Col md={8}>
        <Button type="submit" color="primary" disabled={isSubmitting}>{isSubmitting ? 'Saving' : 'Save'}</Button>
      </Col>

    </Form>
  )
};

export default withFormik({
  displayName: 'addSnippet',
  mapPropsToValues: (props) => {
    return {
      ...{
        name: "",
        schoolCode: "",
        programTemplateId: '',
        category: "",
        subCategory: "",
        aims: "",
        description: "",
        website: "",
        participantGroups: [],
        participantGroupsDescription: "",
        focusGroup: "",
        focusGroupOther: "",
        yearLevels: [],
        cohortSize: "",
        deliveredByType: "",
        externalProvider: "",
        staff: [],
        year: "",
        terms: [],
        tags: [],
      },
      ...props.model,
    };
  },
  validate: (values, props) => {
    const errors = {};

    if (!values.schoolCode) {
      errors.schoolCode = 'Required';
    }
    if (!values.year) {
      errors.year = 'Required';
    }

    if (Object.keys(errors).length) {
      log(`invalid: ${JSON.stringify(errors)}`);
    }

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

    props.onBeforeSubmit && props.onBeforeSubmit();

    return props.onSubmit(values).then(
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
    ).then(() => {
      props.onSubmitSuccess && props.onSubmitSuccess();
    });
  }
})(ProgramEditForm);

