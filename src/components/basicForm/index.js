import { h, Component } from 'preact';
import { withFormik } from 'formik';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const BasicForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit = () => console.error('Must provide a handleSubmit'),
  isSubmitting,
}) => {
  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email"
          name="email"
          id="exampleEmail"
          placeholder="with a placeholder"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          valid={errors.email && !errors.email}
        />
        {touched.email && errors.email && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          valid={errors.password && !errors.password}
        />
        {touched.password && errors.password && <FormFeedback>{errors.password}</FormFeedback>}

      </FormGroup>

      <Button type="submit" disabled={isSubmitting}>Submit</Button>
    </Form>
  );
};

const WrappedBasicForm = withFormik({
  // transform outer props into form values
  mapPropsToValues: props => ({
    email: '',
    password: ''
  }),
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
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
    new Promise((resolve) => {
      console.log('will submit');
      console.log('submitted');
      resolve();
    });
    // LoginToMyApp(values).then(
    //   user => {
    //     setSubmitting(false);
    //     //
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     // setErrors()
    //   }
    // );
  },
})(BasicForm);

export default WrappedBasicForm;

