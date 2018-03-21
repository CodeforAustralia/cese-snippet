import React from 'react';
import { withFormik } from 'formik';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const ProgramForm = ({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       isSubmitting,
                       handleSubmit,
                     }) => {
  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="inputName">Program name</Label>
        <Input type="name"
               name="name"
               id="inputName"
               autoFocus
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.name}
               valid={errors.name && !errors.name}
        />
        {touched.name && errors.name && <FormFeedback>{errors.name}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="inputCode">School code</Label>
        <Input type="code"
               name="code"
               id="inputCode"
               autoFocus
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.code}
               valid={errors.code && !errors.code}
        />
        {touched.code && errors.code && <FormFeedback>{errors.code}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="inputYear">Year</Label>
        <Input type="year"
               name="year"
               id="inputYear"
               autoFocus
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.year}
               valid={errors.year && !errors.year}
        />
        {touched.year && errors.year && <FormFeedback>{errors.year}</FormFeedback>}
      </FormGroup>
      <Button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>Submit</Button>
    </Form>
  )
};

export default withFormik({
  displayName: 'LoginForm',
  mapPropsToValues: props => ({
    code: props.code,
    year: props.year,
  }),
  handleSubmit: (values, { props, setSubmitting, setErrors /* setValues, setStatus, and other goodies */ }) => {
    props.createProgram(values).then(
      (resp) => {
        setSubmitting(false);
        // props.onSuccess();
      }
    );
  },
})(ProgramForm);
