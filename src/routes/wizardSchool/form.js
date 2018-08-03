import React from 'react';
import { withFormik } from 'formik';
import Bows from 'bows';
import {
  Form,
  FormGroup,
  Col,
} from 'reactstrap';
import get from 'lodash/get';

import FieldSelect from "components/fieldSelect";
import { PageLoading } from 'components/loading';

const log = Bows('Form - Register School');


class RegisterSchoolForm extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.values.code && (prevProps.values.code !== this.props.values.code)) {
      this.props.submitForm();
    }
  }
  render() {
    const {
      optionsSchools,

      handleSubmit,
      values,
      setFieldValue,
      setFieldTouched,
      errors,
      touched,
      isSubmitting,
    } = this.props;

    return (
      <Form noValidate={true} onSubmit={handleSubmit}>
        <FormGroup className="no-gutters">
          <Col md={{size:6}}>
            <FieldSelect name="code"
                         value={values.code}
                         options={optionsSchools}
                         invalid={errors.code}
                         touched={touched.code}
                         onChange={setFieldValue}
                         onBlur={setFieldTouched}
                         autoFocus={true}
                         searchable={true}
                         disabled={isSubmitting}
                         clearable={false}
            />
          </Col>
        </FormGroup>
        {isSubmitting && <PageLoading />}
      </Form>
    )
  }
}

export default withFormik({
  displayName: 'registerSchool',
  mapPropsToValues: (props) => {
    return {
      code: get(props, 'model.schools[0]', ''),
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
    const newSessionUser = {...props.model};
    newSessionUser.schools = [values.code];

    log(`submitting - ${JSON.stringify(newSessionUser)}`);
    props.setContainerState({
      isSubmitting: true,
    });

    return props.onSubmit(newSessionUser).then(
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
})(RegisterSchoolForm);
