import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const ProgramForm = ({ onSubmit, onSubmitSuccess = () => {}, formState }) => {
  const { code, year, name, id } = formState;
  const isEdit = typeof id !== 'undefined';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      id: form.id.value,
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
      {isEdit &&
        <FormGroup hidden>
          <Label for="id">Program name</Label>
          <Input type="text" id="id" name="id" defaultValue={id} />
        </FormGroup>
      }
      <FormGroup>
        <Label for="name">Program name</Label>
        <Input type="text" id="name" name="name" defaultValue={name} />
      </FormGroup>
      <FormGroup>
        <Label for="code">School code</Label>
        <Input type="text" id="code" name="code" defaultValue={code} disabled={isEdit} />
      </FormGroup>
      <FormGroup>
        <Label for="year">Year offered</Label>
        <Input type="text" id="year" name="year" defaultValue={year} disabled={isEdit} />
      </FormGroup>
      <Button type="submit" className="btn btn-lg btn-primary btn-block">Submit</Button>
    </Form>
  )
};

export default ProgramForm;
