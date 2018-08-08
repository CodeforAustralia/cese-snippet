import React from 'react';
import { withFormik } from 'formik';
import {
  Form,
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import Bows from 'bows';

import FieldSelect from "components/fieldSelect";
import FieldTextInput from "../../components/fieldTextInput/index";


const log = Bows('F: RegisterSchoolProgram');

class QuickAddProgramForm extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.values.name && (prevProps.values.name !== this.props.values.name)) {
      this.props.submitForm();
    }
  }
  render() {
    const {
      optionsPrograms,

      handleSubmit,
      values,
      setFieldValue,
      setFieldTouched,
      errors,
      touched,
      isSubmitting,
    } = this.props;

    return (
      <div>
        <FormGroup>
          <Label>Search program name</Label>
          <Form noValidate={true} onSubmit={handleSubmit}>
            <FormGroup row className="no-gutters">
              <Col>
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
            </FormGroup>

            <FieldTextInput name="programTemplateId" value={values.programTemplateId} hidden={true} />
          </Form>
        </FormGroup>
      </div>
    )
  }
}

export default withFormik({
  displayName: 'registerSchoolProgram',
  mapPropsToValues: (props) => {
    return {
      ...{
        name: '',
        schoolCode: '',
        year: '',
        programTemplateId: '',
      },
      ...props.model,
      createdBy: props.sessionUser.id,
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
      resetForm,
    }
  ) => {
    const newProgram = {...props.model};
    newProgram.name = values.name;

    log(`submitting - ${JSON.stringify(newProgram)}`);

    props.onBeforeSubmit && props.onBeforeSubmit();

    return props.onSubmit(newProgram).then(
      resp => {
        log('success');
        setSubmitting(false);
        return resp;
      },
      errors => {
        log('error');
        setSubmitting(false);
        return errors;
      }
    ).then((p) => {
      resetForm();
      props.onSubmitSuccess && props.onSubmitSuccess(p);
    });
  }
})(QuickAddProgramForm);

