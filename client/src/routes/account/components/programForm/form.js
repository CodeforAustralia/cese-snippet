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

import FIELDS_STATIC from 'static/programFieldData.json';
import STAFF_STATIC from 'static/staff.json';

import FieldSelect from 'components/fieldSelect';
import FieldSelectTags from 'components/fieldSelectTags';
import FieldCode from './../fieldCode';


const log = Bows('Form');


const getLevel1Cats = () => FIELDS_STATIC.categories.map(level1 => {
  return { value: level1.value, label: level1.label };
});

const getLevel2Cats = (level1Value) => {
  const level1Cat = FIELDS_STATIC.categories.find(level1 => level1.value === level1Value);
  if (!level1Cat) {
    return null;
  }
  return level1Cat.categories.map(level2 => {
    return { value: level2.value, label: level2.label };
  });
};

const getStaffOptions = () => STAFF_STATIC.staff.map((staff) => ({ value: staff.id, label: staff.email }));


const ProgramForm = (props) => {

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit,

    isEdit,
    getYearLevelsOptions,
    codeOptions,
    year,
    getTermsOptions,
  } = props;

  log('values:', values);

  if (!codeOptions.length) {
    return <p>Loading...</p>
  }

  const yearLevelsOptions = getYearLevelsOptions(values.code);
  const participantGroupsOptions = FIELDS_STATIC.participantGroups;
  const focusGroupOptions = FIELDS_STATIC.focusGroup;
  const deliveredByTypeOptions = FIELDS_STATIC.deliveredByType;
  const tagsOptions = FIELDS_STATIC.tags;
  const termsOptions = getTermsOptions();
  const level1CategoryOptions = getLevel1Cats();
  const level2CategoryOptions = getLevel2Cats(values.category);
  const staffOptions = getStaffOptions();


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
        <FieldCode name="code"
                   disabled={isEdit}
                   options={codeOptions}
                   value={values.code}
                   onChange={props.setFieldValue}
                   onBlur={props.setFieldTouched}
                   touched={touched.code}
                   invalid={errors.code} />
        {errors.code && touched.code &&  <FormFeedback>{errors.code}</FormFeedback>}
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
        <FieldSelect name="category"
                     options={level1CategoryOptions}
                     clearable={false}
                     value={values.category}
                     onChange={props.setFieldValue}
                     onBlur={props.setFieldTouched}
                     touched={touched.category}
                     invalid={errors.category} />
        {!!errors.category && touched.category &&  <FormFeedback>{errors.category}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subCategory">Program Category</Label>
        <FieldSelect name="subCategory"
                     clearable={false}
                     options={level2CategoryOptions}
                     disabled={typeof values.category === 'undefined'}
                     value={values.subCategory}
                     onChange={props.setFieldValue}
                     onBlur={props.setFieldTouched}
                     touched={touched.subCategory}
                     invalid={errors.subCategory} />
        {!!errors.subCategory && touched.subCategory &&  <FormFeedback>{errors.subCategory}</FormFeedback>}
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
          A comprehensive full length description of the program. Describe the structure of the program, and how it is delivered.
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
        {/*todo - make this an inline checkbox component*/}
        <FieldArray
          name="participantGroups"
          id="participantGroups"
          render={arrayHelpers => (
            <div>
              {participantGroupsOptions.map((o, idx) => {
                const isChecked = typeof values.participantGroups !== 'undefined' ? values.participantGroups.includes(o.value) : false;
                return (
                  <div key={idx} className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        name={`yearLevels.${o.value}`}
                        type="checkbox"
                        value={o.value}
                        checked={isChecked}
                        onChange={(e) => {
                          if (isChecked) {
                            const idx = values.participantGroups.indexOf(o.value);
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
        {touched.participantGroups && errors.participantGroups && <FormFeedback>{errors.participantGroups}</FormFeedback>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="participantGroupsDescription">Who in the community?</Label>
        <Input type="text" id="participantGroupsDescription" name="participantGroupsDescription"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.participantGroupsDescription}
               invalid={errors.participantGroupsDescription} />
        <FormText color="muted">
          Example: Partner schools students, charities, aged care residents
        </FormText>
      </FormGroup>

      <FormGroup>
        <Label>Does the program cater to a particular focus group?</Label>
        <div id="focusGroup">
          {/*todo - make this an radio component*/}
          {focusGroupOptions.map((o, idx) => {
            const oName = `focusGroup.${o.value}`;
            return (
              <div key={idx} className="form-check">
                <input type="radio" className="form-check-input"
                       name={oName}
                       id={oName}
                       value={o.value}
                       checked={values.focusGroup === o.value}
                       onChange={() => {
                         props.setFieldValue('focusGroup', o.value);
                       }}
                       invalid={errors.focusGroup} />
                <label className="form-check-label" htmlFor={oName}>{o.label}</label>
              </div>
            )
          })}
        </div>
      </FormGroup>
      <FormGroup>
        <Input type="text" id="focusGroupOther" name="focusGroupOther"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.focusGroupOther}
               invalid={errors.focusGroupOther} />
      </FormGroup>

      <FormGroup>
        <Label>Year Levels</Label>
        {/*todo - make this an inline checkbox component*/}
        <FieldArray
          name="yearLevels"
          id="yearLevels"
          render={arrayHelpers => (
            <div>
              {yearLevelsOptions.map((o, idx) => {
                const isChecked = typeof values.yearLevels !== 'undefined' ? values.yearLevels.includes(o.value) : false;
                return (
                  <div key={idx} className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
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
        <Label>Provider</Label>
        {/*todo - make this an radio component*/}
        <div id="deliveredByType">
          {deliveredByTypeOptions.map((o, idx) => {
            const oName = `deliveredByType.${o.value}`;
            return (
              <div key={idx} className="form-check">
                <input type="radio" className="form-check-input"
                       name={oName}
                       id={oName}
                       value={o.value}
                       checked={values.deliveredByType === o.value}
                       onChange={() => {
                         props.setFieldValue('deliveredByType', o.value);
                       }}
                       invalid={errors.deliveredByType} />
                <label className="form-check-label" htmlFor={oName}>{o.label}</label>
              </div>
            )
          })}
        </div>
        <FormText color="muted">
          Is the program run by school staff or another provider?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="externalProvider">Who is the External Provider?</Label>
        <Input type="text" id="externalProvider" name="externalProvider"
               onChange={handleChange}
               onBlur={handleBlur}
               defaultValue={values.externalProvider}
               invalid={errors.externalProvider} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="staff">Staff involved</Label>
        <FieldSelectTags name="staff"
                    options={staffOptions}
                    value={values.staff}
                    onChange={props.setFieldValue}
                    onBlur={props.setFieldTouched}
                    touched={touched.staff}
                    invalid={errors.staff} />
        <FormText color="muted">
          Who are the staff members involved in organising or facilitating the program?
        </FormText>
      </FormGroup>

      <FormGroup hidden>
        <Label htmlFor="year">Year delivered</Label>
        <Input type="text" id="year" name="year"
               defaultValue={year}
               invalid={errors.year} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="terms">Terms delivered</Label>
        {/*todo - make this an inline checkbox component*/}
        <FieldArray
          name="terms"
          id="terms"
          render={arrayHelpers => (
            <div>
              {termsOptions.map((o, idx) => {
                const isChecked = typeof values.terms !== 'undefined' ? values.terms.includes(o.value) : false;
                return (
                  <div key={idx} className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        name={`terms.${o.value}`}
                        type="checkbox"
                        value={o.value}
                        checked={isChecked}
                        onChange={(e) => {
                          if (isChecked) {
                            const idx = values.terms.indexOf(o.value);
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
      </FormGroup>

      <FormGroup>
        <Label htmlFor="tags">Keywords</Label>
        <FieldSelectTags name="tags"
                       options={tagsOptions}
                       value={values.tags}
                       onChange={props.setFieldValue}
                       onBlur={props.setFieldTouched}
                       touched={touched.tags}
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
    // return new Promise((res) => res());

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
