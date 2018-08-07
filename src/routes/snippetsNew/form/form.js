import React from 'react';
import get from 'lodash/get';
import { withFormik } from 'formik';
import {
  FormGroup,
  Button,
  Label,
  Col,
  CustomInput,
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
    <div>

      <FormGroup>
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

      <FormGroup>
        <Col md={4}>
          <Label htmlFor="year">Year</Label>
          <FieldTextInput name="year"
                          value={values.year}
                          disabled
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col md={8}>
          <Label htmlFor="programId">Program</Label>
          {typeof values.programId !== 'undefined' ?
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
        <Col md={8}>
          <Label>Add photo</Label>
          <CustomInput type="file" label="Choose photo" />
        </Col>
      </FormGroup>

      <Col md={8}>
        <Button type="submit" color="primary" disabled={isSubmitting}>Post</Button>
      </Col>

    </div>
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
        return resp;
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
        return errors;
      }
    ).then(() => {
      props.resetForm();
    });
  }
})(QuickAddProgramForm);

