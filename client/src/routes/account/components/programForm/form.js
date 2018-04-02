import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Button,
} from 'reactstrap';
import { withFormik } from 'formik';

import CategorySelect from './../fieldCategory';

const ProgramForm = ({
                       values,
                       errors,
                       touched,
                       handleChange,
                       handleBlur,
                       isSubmitting,
                       handleSubmit,
                       isEdit,
}) => {

  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      { isEdit &&
        <FormGroup hidden>
          <Label for="id">ID</Label>
          <Input type="text" id="id" name="id" defaultValue={values.id} />
        </FormGroup>
      }
      { isEdit ?
          <FormGroup hidden>
            <Label for="updatedBy">Updated By</Label>
            <Input type="text" id="updatedBy" name="updatedBy" defaultValue={values.updatedBy} disabled={true} />
          </FormGroup> :
          <FormGroup hidden>
            <Label for="createdBy">Created By</Label>
            <Input type="text" id="createdBy" name="createdBy" defaultValue={values.createdBy} disabled={true} />
          </FormGroup>
      }

      <FormGroup>
        <Label for="code">School code</Label>
        <Input type="text" id="code" name="code"
               disabled={isEdit}
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.code}
               invalid={errors.code} />
      </FormGroup>
      <FormGroup>
        <Label for="name">Program name</Label>
        <Input type="text" id="name" name="name"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.name}
               invalid={errors.name} />
      </FormGroup>

      <p>Is it one of these programs? prompt</p>

      <FormGroup>
        <Label for="category">Type of program</Label>
        <CategorySelect id="category" name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.category}
                        invalid={errors.category} />
      </FormGroup>
      <FormGroup>
        <Label for="subCategory">Sub category</Label>
        <Input type="text" id="subCategory" name="subCategory"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.subCategory}
               invalid={errors.subCategory} />
      </FormGroup>
      <FormGroup>
        <Label for="aims">Desired outcomes</Label>
        <Input type="textarea" rows={3} id="aims" name="aims"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.aims}
               invalid={errors.aims} />
        <FormText color="muted">
          Briefly describe what outcomes the program hopes to achieve.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="description">Short description</Label>
        <Input type="textarea" rows={2} id="description" name="description"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.description}
               invalid={errors.description} />
        <FormText color="muted">
          What does the program does in a nutshell?
        </FormText>
      </FormGroup>

      <p>Would you like to add a longer description?</p>

      <FormGroup>
        <Label for="descriptionFull">Full description</Label>
        <Input type="text" id="descriptionFull" name="descriptionFull"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.descriptionFull}
               invalid={errors.descriptionFull} />
        <FormText color="muted">
          A comprehensive full length description of the program.
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="website">Website</Label>
        <Input type="url" id="website" name="website"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.website}
               invalid={errors.website} />
        <FormText color="muted">
          Some programs have a website for more information.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="participantGroups">Who is the program for?</Label>
        <Input type="text" id="participantGroups" name="participantGroups"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.participantGroups}
               invalid={errors.participantGroups} />
      </FormGroup>

      <p>Would you like to add more detail about the participants?</p>

      <FormGroup>
        <Label for="participantGroupsDescription">Are the participants any of the following?</Label>
        <Input type="text" id="participantGroupsDescription" name="participantGroupsDescription"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.participantGroupsDescription}
               invalid={errors.participantGroupsDescription} />
      </FormGroup>

      <FormGroup>
        <Label for="yearLevel">Year levels</Label>
        <Input type="text" id="yearLevel" name="yearLevel" disabled={isEdit}
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.yearLevel}
               invalid={errors.yearLevel} />
        <FormText color="muted">
          Which school years are participating in this program?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="cohortSize">Cohort size</Label>
        <Input type="number" min={1} max={3000} id="cohortSize" name="cohortSize"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.cohortSize}
               invalid={errors.cohortSize} />
        <FormText color="muted">
          How many people participated in this program?
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="deliveredByType">Provider</Label>
        <Input type="text" id="deliveredByType" name="deliveredByType"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.deliveredByType}
               invalid={errors.deliveredByType} />
        <FormText color="muted">
          Is the program run by school staff or another provider?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="staff">Staff involved</Label>
        <Input type="text" id="staff" name="staff"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.staff}
               invalid={errors.staff} />
        <FormText color="muted">
          Which staff members are involved in organising and/or facilitating?
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label for="year" hidden>Year delivered</Label>
        <Input type="text" id="year" name="year"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.year}
               invalid={errors.year} />
      </FormGroup>
      <FormGroup>
        <Label for="terms">Terms delivered</Label>
        <Input type="text" id="terms" name="terms"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.terms}
               invalid={errors.terms} />
      </FormGroup>

      <FormGroup>
        <Label for="tags">Keywords</Label>
        <Input type="text" id="tags" name="tags"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.tags}
               invalid={errors.tags} />
        <FormText color="muted">
          Keywords could help others to search for programs like this one in the future.
        </FormText>
      </FormGroup>

      <Button type="submit" className="btn btn-lg btn-primary btn-block" disabled={isSubmitting}>Submit</Button>
    </Form>
  )
};


export default withFormik({
  displayName: 'ProgramForm',
  mapPropsToValues: (props) => {
    return props.initialFormState;
  },
  validate: (values, props) => {
    const errors = {};
    return errors;
  },
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    return props.onSubmit(values).then(
      (resp) => {
        setSubmitting(false);
        if (props.onSubmitSuccess) {
          return props.onSubmitSuccess(resp.data.code, resp.data.year);
        }
        return resp;
      },
      (errors) => {
        console.log('submission errors', errors);
        debugger;
        return errors;
      }
    );
  }
})(ProgramForm);
