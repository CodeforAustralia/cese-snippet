import React from 'react';
import { withFormik } from 'formik';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const Login = (values) => {
  return new Promise((resolve) => {
    resolve();
  }).then(
    user => {
      //
      return user;
    },
    errors => {
      //
      return errors;
    }
  );
};

const LoginForm = ({
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
        <Label for="inputEmail">Email address</Label>
        <Input type="email"
               name="email"
               id="inputEmail"
               autoFocus
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               valid={errors.email && !errors.email}
        />
        {touched.email && errors.email && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="inputPassword">Password</Label>
        <Input type="password"
               name="password"
               id="inputPassword"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.password}
               valid={errors.password && !errors.password}
        />
        {touched.password && errors.password && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>
      <Button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>Submit</Button>
    </Form>
  )
};

export default withFormik({
  displayName: 'LoginForm',
  mapPropsToValues: props => ({
    email: 'susan.kennedy@det.nsw.edu.au',
    password: '*******'
  }),
  validate: (values, props) => {
    const errors = {};
    return errors;
  },
  handleSubmit: (
    values, {props, setSubmitting, setErrors /* setValues, setStatus, and other goodies */}
  ) => {
    Login(values).then(
      user => {
        setSubmitting(false);
        props.onSuccess();
      }
    );
  },
})(LoginForm);
