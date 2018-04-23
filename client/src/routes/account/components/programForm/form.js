import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormText,
  Input,
  Button,
  FormFeedback,
  Col,
  Alert,
} from 'reactstrap';
import { withFormik, FieldArray, Field } from 'formik';
import Bows from 'bows';
import { Link } from 'react-router-dom';
import camelCase from 'lodash/camelCase';

import FieldSelect from 'components/fieldSelect';
import FieldSelectTags from 'components/fieldSelectTags';
import FieldCode from './../fieldCode';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import FieldName from './../fieldName';


const log = Bows('Form');

class ProgramForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDescriptionFull: false,
      prefilledProgramTemplateId: null,
    };
  }

  componentDidMount() {
    const { programTemplates } = this.props;
    if (!programTemplates || !programTemplates.length) {
      this.props.fetchProgramTemplates();
    }
  }

  render() {
    const {
      showDescriptionFull,
      prefilledProgramTemplateId,
    } = this.state;

    const {
      values,
      errors,
      touched,
      // handleChange,
      // handleBlur,
      isSubmitting,
      handleSubmit,

      staticData,
      isEdit,
      // getYearLevelsOptions,
      codeOptions,
      year,
      getTermsOptions,
      isFetchingProgramTemplates,
      programTemplates,
    } = this.props;

    log('values:', values);

    if (!codeOptions.length) {
      return <p>Loading...</p>
    }

    if (isFetchingProgramTemplates !== false) {
      return <p>Loading...</p>
    }

    const getLevel1Cats = () => staticData.categories.map(level1 => {
      return {value: level1.value, label: level1.label};
    });

    const getLevel2Cats = (level1Value) => {
      const level1Cat = staticData.categories.find(level1 => level1.value === level1Value);
      if (!level1Cat) {
        return null;
      }
      return level1Cat.categories.map(level2 => {
        return {value: level2.value, label: level2.label};
      });
    };

    const getStaffOptions = () => staticData.staffList.map((staff) => ({value: staff.id, label: staff.email}));

    const getProgramTemplateOptions = () => programTemplates.map(p => ({ value: p.id, label: p.name }));

    const yearLevelsOptions = staticData.yearLevels; //getYearLevelsOptions(values.code) || ; // todo
    const participantGroupsOptions = staticData.participantGroups;
    const focusGroupOptions = staticData.focusGroup;
    const deliveredByTypeOptions = staticData.deliveredByType;
    const tagsOptions = staticData.tags;
    const termsOptions = getTermsOptions();
    const level1CategoryOptions = getLevel1Cats();
    const level2CategoryOptions = getLevel2Cats(values.category);
    const staffOptions = getStaffOptions();

    const programTemplateOptions = getProgramTemplateOptions();

    const getSelectedProgramTemplateOption = () => {
      if (touched.name && values.name) {
        const matched = programTemplateOptions.find(p => p.value === values.name);
        if (matched) {
          return matched;
        }
      }
      return null;
    };
    const selectedProgramTemplateOption = getSelectedProgramTemplateOption();

    return (
      <Form noValidate={true} onSubmit={handleSubmit}>
        {isEdit &&
        <Input hidden type="text" name="id" defaultValue={values.id}/>
        }
        {isEdit ?
          <Input hidden type="text" name="updatedBy" defaultValue={values.updatedBy} disabled={true}/> :
          <Input hidden type="text" name="createdBy" defaultValue={values.createdBy} disabled={true}/>
        }

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="code">School</Label>
            <FieldCode name="code"
                       id="code"
                       disabled={isEdit}
                       options={codeOptions}
                       value={values.code}
                       onChange={this.props.setFieldValue}
                       onBlur={this.props.setFieldTouched}
                       touched={touched.code}
                       invalid={errors.code}/>
            {errors.code && touched.code && <FormFeedback>{errors.code}</FormFeedback>}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="name">Program name</Label>

            <FieldName name="name"
                       options={programTemplateOptions}
                       value={values.name}
                       onChange={this.props.setFieldValue}
                       onBlur={this.props.setFieldTouched}
                       touched={touched.staff}
                       invalid={errors.staff} />
          </Col>
        </FormGroup>

        {!touched.category && selectedProgramTemplateOption ?
          !prefilledProgramTemplateId ?
            <div>
              <Alert color="info">Would you like to prefill this form with known information for "{selectedProgramTemplateOption.label}"?
                <br/>
                <Button color="link" className="alert-link" onClick={() => this.setState({prefilledProgramTemplateId: selectedProgramTemplateOption.value})}>Yes please, prefill.</Button></Alert>
            </div> :
           null :
          null
        }

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="category">Program Focus Area</Label>
            <FieldArray name="category" render={({form}) => {
              return level1CategoryOptions.map((o, idx) => {
                const oName = `category.${camelCase(o.label)}`;
                const isChecked = o.value === values.category;
                return (
                  <div key={idx} className="form-check">
                    <label htmlFor={oName} className="form-check-label">
                      <input type="radio" name="category"
                             id={oName}
                             value={o.value}
                             checked={isChecked}
                             onChange={() => {
                               form.setFieldValue('category', o.value);
                             }}
                             invalid={errors.category}
                             className="form-check-input"
                      />{o.label}
                    </label>
                  </div>
                )
              })
            }} />
            {!!errors.category && touched.category && <FormFeedback>{errors.category}</FormFeedback>}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label>For Year Levels</Label>
            <div>
              <FieldArray
                name="yearLevels"
                render={arrayHelpers => (
                  yearLevelsOptions.map((o, idx) => {
                    const oName = `yearLevels.${o.value}`;
                    const isChecked = typeof values.yearLevels !== 'undefined' ? values.yearLevels.includes(o.value) : false;
                    return (
                      <div key={idx} className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor={oName}>
                          <input
                            className="form-check-input"
                            id={oName}
                            type="checkbox"
                            value={o.value}
                            checked={isChecked}
                            onChange={() => {
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
                  })
                )}
              />
            </div>
            {touched.yearLevels && errors.yearLevels && <FormFeedback>{errors.yearLevels}</FormFeedback>}
            <FormText color="muted">
              Which year levels are participating in this program?
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="subCategory">Program Category</Label>
            <FieldSelect name="subCategory"
                         clearable={false}
                         options={level2CategoryOptions}
                         disabled={typeof values.category === 'undefined'}
                         value={values.subCategory}
                         onChange={this.props.setFieldValue}
                         onBlur={this.props.setFieldTouched}
                         placeholder="First select a Program Focus Area"
                         touched={touched.subCategory}
                         invalid={errors.subCategory}/>
            {!!errors.subCategory && touched.subCategory && <FormFeedback>{errors.subCategory}</FormFeedback>}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="aims">Aims</Label>
            <Field name="aims" invalid={errors.aims} render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="textarea" id="aims" rows={3} {...rest} defaultValue={value} />
              )
            }} />
            <FormText color="muted">
              Briefly describe what outcomes the program hopes to achieve.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="description">Program overview</Label>
            <Field name="description" invalid={errors.description} render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="textarea" id="description" rows={3} {...rest} defaultValue={value} />
              )
            }} />
            <FormText color="muted">
              What does the program does in a nutshell?
            </FormText>
          </Col>
        </FormGroup>

        {!values.descriptionFull && showDescriptionFull === false && <p><Button color="link" onClick={() => this.setState({showDescriptionFull: true})}>Would you like to add a longer description?</Button></p>}

        {values.descriptionFull || showDescriptionFull === true ?
          <FormGroup row>
            <Col md={8} lg={6}>
              <Label htmlFor="descriptionFull">Detailed description</Label>
              <Field name="descriptionFull" invalid={errors.aims} render={({field}) => {
                const { value, ...rest } = field;
                return (
                  <Input type="textarea" id="descriptionFull" rows={6} {...rest} defaultValue={value} />
                )
              }} />
              <FormText color="muted">
                A comprehensive full length description of the program. Describe the structure of the program, and how
                it is delivered.
              </FormText>
            </Col>
        </FormGroup> : null}

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="website">Website</Label>
            <Field name="website" invalid={errors.aims} render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="url" id="website" {...rest} defaultValue={value} />
              )
            }} />
            <FormText color="muted">
              Some programs have a website for more information.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="participantGroups">Who is the program for?</Label>
            <div>
              <FieldArray
                name="participantGroups"
                render={arrayHelpers => (
                  participantGroupsOptions.map((o, idx) => {
                    const oName = `participantGroups.${o.value}`;
                    const isChecked = typeof values.participantGroups !== 'undefined' ? values.participantGroups.includes(o.value) : false;
                    return (
                      <div key={idx} className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor={oName}>
                          <input
                            className="form-check-input"
                            name={oName}
                            type="checkbox"
                            value={o.value}
                            checked={isChecked}
                            onChange={() => {
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
                  })
                )}
              />
            </div>
            {touched.participantGroups && errors.participantGroups &&
            <FormFeedback>{errors.participantGroups}</FormFeedback>}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="participantGroupsDescription">Who in the community?</Label>
            <Field name="participantGroupsDescription" invalid={errors.aims} render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="text" id="participantGroupsDescription" {...rest} defaultValue={value} />
              )
            }} />
            <FormText color="muted">
              Example: Partner schools students, charities, aged care residents
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label>Does the program cater to a particular focus group?</Label>
            <FieldArray name="focusGroup" render={({form}) => (
              focusGroupOptions.map((o, idx) => {
                const oName = `focusGroup.${camelCase(o.value)}`;
                return (
                  <div key={idx} className="form-check">
                    <label className="form-check-label" htmlFor={oName}>
                      <input type="radio" className="form-check-input"
                             id={oName}
                             value={o.value}
                             checked={values.focusGroup === o.value}
                             onChange={() => {
                               this.props.setFieldValue('focusGroup', o.value);
                             }}
                             invalid={errors.focusGroup}
                      />{o.label}</label>
                  </div>
                )
              })
            )} />
          </Col>
        </FormGroup>

        {values.focusGroup === 'Other' &&
          <FormGroup row>
            <Col md={8} lg={6}>
              <Field name="focusGroupOther" invalid={errors.aims} render={({field}) => {
                const { value, ...rest } = field;
                return (
                  <Input type="text" {...rest} defaultValue={value} />
                )
              }} />
            </Col>
          </FormGroup>
        }

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="cohortSize">Number of Participants</Label>
            <Field name="cohortSize" render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="number" id="cohortSize" min={1} max={3000} {...rest} defaultValue={value} />
              )
            }} />
            <FormText color="muted">
              How many people participated in this program?
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label>Provider</Label>
            <FieldRadioBtnList options={deliveredByTypeOptions} name="deliveredByType" value={values.deliveredByType} />
            <FormText color="muted">
              Is the program run by school staff or another provider?
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="externalProvider">Who is the External Provider?</Label>
            <Field name="externalProvider" invalid={errors.externalProvider} render={({field}) => {
              const { value, ...rest } = field;
              return (
                <Input type="text" id="externalProvider" {...rest} defaultValue={value} />
              )
            }} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="staff">Staff involved</Label>
            <FieldSelectTags name="staff"
                             options={staffOptions}
                             value={values.staff}
                             onChange={this.props.setFieldValue}
                             onBlur={this.props.setFieldTouched}
                             touched={touched.staff}
                             invalid={errors.staff}/>
            <FormText color="muted">
              Who are the staff members involved in organising or facilitating the program?
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup hidden>
          <Label htmlFor="year">Year delivered</Label>
          <Input type="text" id="year" name="year"
                 defaultValue={year}
                 invalid={errors.year}/>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="terms">Terms delivered</Label>
            <div>
              <FieldArray
                name="terms"
                render={arrayHelpers => (
                  termsOptions.map((o, idx) => {
                    const oName = `terms.${o.value}`;
                    const isChecked = typeof values.terms !== 'undefined' ? values.terms.includes(o.value) : false;
                    return (
                      <div key={idx} className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor={oName}>
                          <input
                            className="form-check-input"
                            id={oName}
                            type="checkbox"
                            value={o.value}
                            checked={isChecked}
                            onChange={() => {
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
                  })
                )}
              />
            </div>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8} lg={6}>
            <Label htmlFor="tags">Keywords</Label>
            <FieldSelectTags name="tags"
                             options={tagsOptions}
                             value={values.tags}
                             onChange={this.props.setFieldValue}
                             onBlur={this.props.setFieldTouched}
                             touched={touched.tags}
                             invalid={errors.tags} />
            <FormText color="muted">
              Keywords could help others to search for programs like this one in the future.
            </FormText>
          </Col>
        </FormGroup>

        <Col md={8} lg={6}>
          <Link to="account">Cancel</Link>
          <Button type="submit" color="primary" size="lg" className="float-right"
                  disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Col>

      </Form>
    )
  };
}


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

    return props.onSubmit(values).then(
      (resp) => {
        setSubmitting(false);
        if (props.onSubmitSuccess) {
          if (resp && resp.data) {
            return props.onSubmitSuccess(resp.data.code, resp.data.year);
          } else {
            debugger; // todo
          }
          return;
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

