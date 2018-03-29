import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const ProgramForm = ({ onSubmit, onSubmitSuccess = () => {}, formState }) => {
  const { code, year } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      code: form.code.value,
      year: form.year.value,
    };
    return onSubmit(data).then(() => {
      onSubmitSuccess(form.code.value, form.year.value);
    });
  };

  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Program name</Label>
        <Input type="text" id="name" name="name" />
      </FormGroup>
      <FormGroup>
        <Label for="code">School code</Label>
        <Input type="text" id="code" name="code" defaultValue={code} />
      </FormGroup>
      <FormGroup>
        <Label for="year">Year offered</Label>
        <Input type="text" id="year" name="year" defaultValue={year} />
      </FormGroup>
      <Button type="submit" className="btn btn-lg btn-primary btn-block">Submit</Button>
    </Form>
  )
};

export default ProgramForm;
