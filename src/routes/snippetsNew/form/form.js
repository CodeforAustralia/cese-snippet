import React from 'react';
import get from 'lodash/get';
import { withFormik } from 'formik';
import {
  FormGroup,
  Button,
  Label,
  Col,
  CustomInput,
  Form,
} from 'reactstrap';
import Bows from 'bows';

import FieldSelect from "components/fieldSelect";
import FieldTextInput from "components/fieldTextInput";
import FieldTextAreaInput from "components/fieldTextAreaInput";


const log = Bows('F: QuickAddProgram');

const QuickAddProgramForm = ({
                               optionsPrograms = null,

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

      <FormGroup hidden={true}>
        <Col md={8}>
          <Label htmlFor="schoolCode">School</Label>
          <FieldSelect name="schoolCode"
                       options={[
                         { value: values.schoolCode, label: values.schoolCode }
                       ]}
                       value={values.schoolCode}
                       onChange={setFieldValue}
                       onBlur={setFieldTouched}
                       disabled
          />
        </Col>
      </FormGroup>

      <FormGroup hidden={true}>
        <Col md={4}>
          <Label htmlFor="year">Year</Label>
          <FieldTextInput name="year"
                          value={values.year}
                          disabled
          />
        </Col>
      </FormGroup>

      <FormGroup hidden={values.programId}>
        <Col md={6}>
          <Label htmlFor="programId">Program</Label>
          {values.programId ?
            <FieldSelect name="programId"
                         options={[
                           { value: values.programId, label: values.programId }
                         ]}
                         value={values.programId}
                         onChange={setFieldValue}
                         onBlur={setFieldTouched}
                         disabled
            /> :
            <FieldSelect name="programId"
                         options={optionsPrograms}
                         value={values.programId}
                         onChange={setFieldValue}
                         onBlur={setFieldTouched}
                         error={errors.programId}
            />
          }
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

      <FormGroup>
        <Col md={5}>
          <Label htmlFor="photo">Add photo</Label>
          <CustomInput type="file" label="Choose photo" id="photo" />
        </Col>
      </FormGroup>

      <Col md={8}>
        <Button type="submit" color="primary" disabled={isSubmitting}>Post</Button>
      </Col>

    </Form>
  )
};

export default withFormik({
  displayName: 'addSnippet',
  mapPropsToValues: (props) => {
    return {
      schoolCode: get(props, 'schoolCode', ''),
      year: get(props, 'year', ''),
      programId: get(props, 'programId', ''),
      type: 'photo',
      description: '',
      attachment: {
        format: 'jpeg',
        width: 600,
        height: 400,
        filename: `${new Date().getTime()}.jpg`,
        url: "https://picsum.photos/600/400/?random",
        thumbnailUrl: "https://picsum.photos/64/64"
      },
    };
  },
  validate: (values, props) => {
    const errors = {};

    if (!values.programId) {
      errors.programId = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
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
    const newSnippet = values;

    log(`submitting - ${JSON.stringify(newSnippet)}`);
    // props.setContainerState({
    //   isSubmitting: true,
    // });
    return props.onSubmit(newSnippet).then(
      resp => {
        log(`success - ${JSON.stringify(resp)}`);
        // props.setContainerState({
        //   hasSubmitted: true,
        //   isSubmitting: false,
        // });
        setSubmitting(false);
        return resp;
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
        return errors;
      }
    ).then(() => {
      props.onSubmitSuccess();
    });
  }
})(QuickAddProgramForm);

