import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const ProgramForm = ({ onSubmit, onSubmitSuccess = () => {}, formState = {} }) => {
  const isEdit = typeof formState.id !== 'undefined';

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
      { isEdit &&
        <FormGroup hidden>
          <Label for="id">ID</Label>
          <Input type="text" id="id" name="id" defaultValue={formState.id} />
        </FormGroup>
      }
      <FormGroup>
        <Label for="code">School code</Label>
        <Input type="text" id="code" name="code" defaultValue={formState.code} disabled={isEdit} />
      </FormGroup>
      <FormGroup>
        <Label for="name">Program name</Label>
        <Input type="text" id="name" name="name" defaultValue={formState.name} />
      </FormGroup>

      <p>Is it one of these programs? prompt</p>

      <FormGroup>
        <Label for="category">Type of program</Label>
        <Input type="text" id="category" name="category" defaultValue={formState.category} />
      </FormGroup>
      <FormGroup>
        <Label for="subCategory">Sub category</Label>
        <Input type="text" id="subCategory" name="subCategory" defaultValue={formState.subCategory} />
      </FormGroup>
      <FormGroup>
        <Label for="aims">Desired outcomes</Label>
        <Input type="text" id="aims" name="aims" defaultValue={formState.aims} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Short description</Label>
        <Input type="text" id="description" name="description" defaultValue={formState.description} />
      </FormGroup>

      <p>Would you like to add a longer description?</p>

      <FormGroup>
        <Label for="descriptionFull">Full description</Label>
        <Input type="text" id="descriptionFull" name="descriptionFull" defaultValue={formState.descriptionFull} />
      </FormGroup>
      <FormGroup>
        <Label for="website">Website</Label>
        <Input type="url" id="website" name="website" defaultValue={formState.website} />
      </FormGroup>
      <FormGroup>
        <Label for="participantGroups">Who is the program for?</Label>
        <Input type="text" id="participantGroups" name="participantGroups" defaultValue={formState.participantGroups} />
      </FormGroup>

      <p>Would you like to add more detail about the participants?</p>

      <FormGroup>
        <Label for="participantGroupsDescription">Are the participants any of the following?</Label>
        <Input type="text" id="participantGroupsDescription" name="participantGroupsDescription" defaultValue={formState.participantGroupsDescription} />
      </FormGroup>

      <FormGroup>
        <Label for="yearLevel">Which school years are participating in this program?</Label>
        <Input type="text" id="yearLevel" name="yearLevel" defaultValue={formState.yearLevel} disabled={isEdit} />
      </FormGroup>
      <FormGroup>
        <Label for="cohortSize">Cohort size</Label>
        <Input type="text" id="cohortSize" name="cohortSize" defaultValue={formState.cohortSize} />
      </FormGroup>

      <FormGroup>
        <Label for="deliveredByType">Is the program run by school staff or another provider?</Label>
        <Input type="text" id="deliveredByType" name="deliveredByType" defaultValue={formState.deliveredByType} />
      </FormGroup>
      <FormGroup>
        <Label for="staff">Which staff members are involved in organising and/or facilitating?</Label>
        <Input type="text" id="staff" name="staff" defaultValue={formState.staff} />
      </FormGroup>

      <FormGroup>
        <Label for="yearDelivered" hidden>Year delivered</Label>
        <Input type="text" id="yearDelivered" name="yearDelivered" defaultValue={formState.yearDelivered} />
      </FormGroup>
      <FormGroup>
        <Label for="termsDelivered">Terms delivered</Label>
        <Input type="text" id="termsDelivered" name="termsDelivered" defaultValue={formState.termsDelivered} />
      </FormGroup>

      <FormGroup>
        <Label for="tags">Keywords</Label>
        <Input type="text" id="tags" name="tags" defaultValue={formState.tags} />
      </FormGroup>

      <Button type="submit" className="btn btn-lg btn-primary btn-block">Submit</Button>
    </Form>
  )
};

export default ProgramForm;
