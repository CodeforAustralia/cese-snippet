import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Button,
} from 'reactstrap';

import CategorySelect from './../fieldCategory';

const ProgramForm = ({ onSubmit, onSubmitSuccess = () => {}, formState = {} }) => {
  const isEdit = typeof formState.id !== 'undefined';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      code: form.code.value,
      year: form.year.value,
      // category,
      // subCategory,
      // aims,
      // description,
      // descriptionFull,
      // website,
      // participantGroups,
      // participantGroupsDescription,
      // yearLevel,
      // cohortSize,
      // deliveredByType,
      // staff,
      // yearDelivered,
      // termsDelivered,
      // tags,
    };

    if (form.id && form.id.value) {
      data.id = form.id;
    }

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
        <CategorySelect id="category" name="category" defaultValue={formState.category} />
      </FormGroup>
      <FormGroup>
        <Label for="subCategory">Sub category</Label>
        <Input type="text" id="subCategory" name="subCategory" defaultValue={formState.subCategory} />
      </FormGroup>
      <FormGroup>
        <Label for="aims">Desired outcomes</Label>
        <Input type="textarea" rows={3} id="aims" name="aims" defaultValue={formState.aims} />
        <FormText color="muted">
          Briefly describe what outcomes the program hopes to achieve.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="description">Short description</Label>
        <Input type="text" id="description" name="description" defaultValue={formState.description} />
        <FormText color="muted">
          What does the program does in a nutshell?
        </FormText>
      </FormGroup>

      <p>Would you like to add a longer description?</p>

      <FormGroup>
        <Label for="descriptionFull">Full description</Label>
        <Input type="text" id="descriptionFull" name="descriptionFull" defaultValue={formState.descriptionFull} />
        <FormText color="muted">
          A comprehensive full length description of the program.
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="website">Website</Label>
        <Input type="url" id="website" name="website" defaultValue={formState.website} />
        <FormText color="muted">
          Some programs have a website for more information.
        </FormText>
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
        <Label for="yearLevel">Year levels</Label>
        <Input type="text" id="yearLevel" name="yearLevel" defaultValue={formState.yearLevel} disabled={isEdit} />
        <FormText color="muted">
          Which school years are participating in this program?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="cohortSize">Cohort size</Label>
        <Input type="text" id="cohortSize" name="cohortSize" defaultValue={formState.cohortSize} />
        <FormText color="muted">
          How many people participated in this program?
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="deliveredByType">Provider</Label>
        <Input type="text" id="deliveredByType" name="deliveredByType" defaultValue={formState.deliveredByType} />
        <FormText color="muted">
          Is the program run by school staff or another provider?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="staff">Staff involved</Label>
        <Input type="text" id="staff" name="staff" defaultValue={formState.staff} />
        <FormText color="muted">
          Which staff members are involved in organising and/or facilitating?
        </FormText>
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
        <FormText color="muted">
          Keywords could help others to search for programs like this one in the future.
        </FormText>
      </FormGroup>

      <Button type="submit" className="btn btn-lg btn-primary btn-block">Submit</Button>
    </Form>
  )
};

export default ProgramForm;
