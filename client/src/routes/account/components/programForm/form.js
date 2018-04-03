import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Button,
  FormFeedback,
} from 'reactstrap';
import { withFormik, FieldArray } from 'formik';
import Bows from 'bows';

import FieldCode from './../fieldCode';

import CategorySelect from './../fieldCategory';


const log = Bows('Form');


const ProgramForm = (props) => {

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,
    setValues,

    isEdit,
    getYearLevelsOptions,
    codeOptions,
  } = props;


  log('values:', values);


  if (!codeOptions.length) {
    return <p>Loading...</p>
  }

  if (!values.code && codeOptions.length === 1) {
    setValues({...values, code: codeOptions[0].value});
  }

  const yearLevelsOptions = getYearLevelsOptions(values.code);


  return (
    <Form noValidate={true} onSubmit={handleSubmit}>
      { isEdit &&
        <Input hidden type="text" name="id" defaultValue={values.id} />
      }
      { isEdit ?
        <Input hidden type="text" name="updatedBy" defaultValue={values.updatedBy} disabled={true} />  :
        <Input hidden type="text" name="createdBy" defaultValue={values.createdBy} disabled={true} />
      }

      <FormGroup>
        <Label htmlFor="code">School code</Label>
        <FieldCode id="code" name="code"
               options={codeOptions}
               disabled={isEdit}
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.code}
               invalid={errors.code} />
        {touched.code && errors.code && <FormFeedback>{errors.code}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="name">Program name</Label>
        <Input type="text" id="name" name="name"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.name}
               invalid={errors.name} />
      </FormGroup>

      <p>Is it one of these programs? prompt</p>

      <FormGroup>
        <Label htmlFor="category">Program Area</Label>
        <CategorySelect id="category" name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.category}
                        invalid={errors.category} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subCategory">Program Category</Label>
        <Input type="text" id="subCategory" name="subCategory"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.subCategory}
               invalid={errors.subCategory} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="aims">Aims</Label>
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
        <Label htmlFor="description">Program overview</Label>
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
        <Label htmlFor="descriptionFull">Detailed description</Label>
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
        <Label htmlFor="website">Website</Label>
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
        <Label htmlFor="participantGroups">Who is the program for?</Label>
        <Input type="text" id="participantGroups" name="participantGroups"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.participantGroups}
               invalid={errors.participantGroups} />
      </FormGroup>

      <p>Would you like to add more detail about the participants?</p>

      <FormGroup>
        <Label htmlFor="participantGroupsDescription">Does the program cater to a particular focus group?</Label>
        <Input type="text" id="participantGroupsDescription" name="participantGroupsDescription"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.participantGroupsDescription}
               invalid={errors.participantGroupsDescription} />
      </FormGroup>

      <FormGroup>
        <FieldArray
          name="yearLevels"
          render={arrayHelpers => (
            <div>
              {yearLevelsOptions.map((o, idx) => {
                const isChecked = typeof values.yearLevels !== 'undefined' ? values.yearLevels.includes(o.value) : false;
                return (
                  <div key={idx}>
                    <label>
                      <input
                        name={`yearLevels.${o.value}`}
                        type="checkbox"
                        value={o.value}
                        checked={isChecked}
                        onChange={e => {
                          if (isChecked) {
                            const idx = values.yearLevels.indexOf(o.value);
                            arrayHelpers.remove(idx);
                          } else {
                            arrayHelpers.push(o.value);
                          }
                        }}
                      />
                      {o.label}
                    </label>
                  </div>
                )
              })}
            </div>
          )}
        />
        {touched.yearLevels && errors.yearLevels && <FormFeedback>{errors.yearLevels}</FormFeedback>}
        <FormText color="muted">
          Which year levels are participating in this program?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="cohortSize">Number of Participants</Label>
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
        <Label htmlFor="deliveredByType">Provider</Label>
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
        <Label htmlFor="staff">Staff involved</Label>
        <Input type="text" id="staff" name="staff"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.staff}
               invalid={errors.staff} />
        <FormText color="muted">
          Who are the staff members involved in organising or facilitating the program?
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="year" hidden>Year delivered</Label>
        <Input type="text" id="year" name="year"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.year}
               invalid={errors.year} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="terms">Terms delivered</Label>
        <Input type="text" id="terms" name="terms"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.terms}
               invalid={errors.terms} />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="tags">Keywords</Label>
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

    log('Submitting values:', values);

    return new Promise((res) => res());

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
