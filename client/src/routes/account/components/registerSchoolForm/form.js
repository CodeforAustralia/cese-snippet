import React from 'react';
import { withFormik } from 'formik';

import {
  Form,
  FormGroup,
  Button,
  Label
} from 'reactstrap';
import FieldSelect from "components/fieldSelect";


class RegistrationForm extends React.Component {
  componentDidMount() {
    this.props.fetchSchoolsList();
  }
  render() {
    const {
      errors,
      handleSubmit,
      values,

      schoolsListOptions,
    } = this.props;

    return (
      <Form noValidate={true} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Select your school</Label>
          <FieldSelect name="code"
                       value={values.code}
                       options={schoolsListOptions}
                       disabled={!schoolsListOptions.length}
                       onChange={this.props.setFieldValue}
                       onBlur={this.props.setFieldTouched}
                       invalid={errors.code}
          />
        </FormGroup>
        <Button type="submit">Register</Button>
      </Form>
    )
  }
}


export default withFormik({
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    debugger
  },
})(RegistrationForm);





// name="tags"
// options={tagsOptions}
// value={values.tags}
// onChange={this.props.setFieldValue}
// onBlur={this.props.setFieldTouched}
// touched={touched.tags}
// invalid={errors.tags}
