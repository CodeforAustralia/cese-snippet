import React from 'react';
import { withFormik } from 'formik';
import Bows from 'bows';

import {
  Form,
  FormGroup,
  Button,
  Col,
} from 'reactstrap';
import FieldSelect from "components/fieldSelect";

const log = Bows('Form');


class RegistrationForm extends React.Component {

  componentDidMount() {
    if (!this.props.schoolsListOptions.length) {
      this.props.fetchSchoolsList();
    }
  }

  render() {
    const {
      errors,
      handleSubmit,
      values,
      touched,
      isSubmitting,

      autoFocus,
      schoolsListOptions,
    } = this.props;

    return (
      <Form noValidate={true} onSubmit={handleSubmit}>
        <FormGroup row className="mb-4">
          <Col md={{size: 10}}>
            <FieldSelect name="code"
                         value={values.code}
                         options={schoolsListOptions}
                         disabled={!schoolsListOptions.length}
                         onChange={this.props.setFieldValue}
                         onBlur={this.props.setFieldTouched}
                         invalid={errors.code}
                         touched={touched.code}
                         autoFocus={autoFocus}
            />
          </Col>
        </FormGroup>
        <Button type="submit" color="primary" disabled={isSubmitting || !values.code}>
          {isSubmitting ? 'Adding...' : `Add`}
        </Button>
      </Form>
    )
  }
}


export default withFormik({
  displayName: 'RegisterForm',

  validate: (values, props) => {
    const errors = {};
    return errors;
  },

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {

    const { code } = values;

    const newSession = {...props.session};
    newSession.schools.push(code);


    log('Submitting payload:', newSession);

    return props.onSubmit(newSession).then(
      (resp) => {
        setSubmitting(false);
        if (props.onSubmitSuccess) {
          if (resp && resp.data) {
            return props.onSubmitSuccess(code);
          } else {
            debugger; // todo
          }
          return;
        }
        return resp;
      },
      (errors) => {
        console.log('submission errors', errors);
        debugger;
        return errors;
      }
    );
  },
})(RegistrationForm);
