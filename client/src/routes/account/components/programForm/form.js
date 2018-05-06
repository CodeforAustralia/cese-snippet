import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  FormText,
  Button,
  FormFeedback,
  Col,
  Row,
  Alert,
  Input,
} from 'reactstrap';
import {
  withFormik,
} from 'formik';
import Bows from 'bows';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import {
  getSchoolYearLevelsOptions,
  getLevel1Categories,
  getLevel2Categories,
  getStaffOptions,
  getTermsOptions,
  getSchoolsOptions,
  getProgramTemplateOptions,
} from 'store/programs/formHelpers';
import { CircleLoading } from 'components/loading';
import FieldSelect from 'components/fieldSelect';
import FieldSelectTags from 'components/fieldSelectTags';
import FieldNumberInput from 'components/fieldNumberInput';
import FieldUrlInput from 'components/fieldUrlInput';
import FieldTextInput from 'components/fieldTextInput';
import FieldTextareaInput from 'components/fieldTextAreaInput';
import FieldRadioList from 'components/fieldRadioList';
import FieldCheckboxList from 'components/fieldCheckboxList';

import FieldCode from './../fieldCode';
// import FieldName from './../fieldName';
import { isRequired } from 'helpers/validators';

import style from './style.scss';


const log = Bows('Form');

class ProgramForm extends React.Component {

  constructor(props) {
    super(props);
    this.handlePrefill = this.handlePrefill.bind(this);

    this.optionsSchoolCodes = getSchoolsOptions(props.schools);
    this.optionsYearLevels = getSchoolYearLevelsOptions(props.school);
    this.optionsParticipantGroups = get(props, 'staticData.participantGroupsOptions');
    this.optionsFocusGroup = get(props, 'staticData.focusGroupOptions');
    this.optionsDeliveredByType = get(props, 'staticData.deliveredByTypeOptions');
    this.optionsTags = get(props, 'staticData.tagsOptions');
    this.optionsTerms = getTermsOptions(props.year);
    this.optionsLevel1Categories = getLevel1Categories(get(props, 'staticData.categoriesOptions'));
    this.optionsStaff = getStaffOptions(get(props, 'staticData.staffList'));

    this.state = {
      showDescriptionFull: false,
      prefilledProgramTemplateId: null,
    };
  }

  componentDidMount() {
    const { programTemplates } = this.props;

    if (typeof programTemplates !== 'undefined') {
      if (!programTemplates || !programTemplates.length) {
        this.props.fetchProgramTemplates();
      }
    }
    // todo - fetch schools
  }

  handlePrefill(programTemplateId) {
    const {
      selectProgramTemplate,
      setValues,  // formik
      // validateForm,
    } = this.props;
    const programTemplate = selectProgramTemplate(programTemplateId);

    if (programTemplate) {
      log('Prefilling: ', JSON.stringify(programTemplate));

      delete programTemplate.updatedAt;
      delete programTemplate.updatedBy;
      delete programTemplate.createdAt;
      delete programTemplate.createdBy;
      delete programTemplate.id;
      delete programTemplate.name;

      // exclude all null values
      Object.keys(programTemplate).forEach(key => {
        const value = programTemplate[key];
        if (value === null) {
          delete programTemplate[key];
        }
      });

      setValues(programTemplate);
      // validateForm();
    } else {
      // todo
    }

    this.setState({prefilledProgramTemplateId: programTemplateId});
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
      isSubmitting,
      handleSubmit,
      setFieldValue,
      setFieldTouched,

      isEdit,
      isFetchingProgramTemplates,
      programTemplates,
    } = this.props;

    log('values:', values);

    // if (!schools) {
    //   return <Loading />
    // }

    if (isFetchingProgramTemplates !== false) {
      return <CircleLoading />
    }

    const optionsLevel2Categories = getLevel2Categories(this.optionsLevel1Categories, values.category);
    const optionsProgramTemplates = getProgramTemplateOptions(programTemplates);

    const selectedProgramTemplateOption = function() {
      if (touched.name && values.name) {
        const matched = optionsProgramTemplates.find(p => p.value === values.name);
        if (matched) {
          return matched;
        }
      }
      return null;
    }();


    log('Form validation errors: ', JSON.stringify(errors));

    return (
      <Row>
        <Col md={{size:9}}>

          <Form noValidate={true} onSubmit={handleSubmit} className={style.programForm}>
            {isEdit &&
            <FieldTextInput name="id" disabled={true} hidden />
            }
            {isEdit ?
              <FieldTextInput name="updatedBy" disabled={true} hidden /> :
              <FieldTextInput name="createdBy" disabled={true} hidden />
            }

            <fieldset className={style.fieldset}>
              <legend>What is the program and when did it happen?</legend>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="code">School</Label>
                  <FieldCode name="code"
                             id="code"
                             disabled={isEdit}
                             options={this.optionsSchoolCodes}
                             value={values.code}
                             onChange={this.props.setFieldValue}
                             onBlur={this.props.setFieldTouched}
                             touched={touched.code}
                             invalid={errors.code}
                             className={errors.code && 'is-invalid'}
                  />
                  {/*{errors.code <FormFeedback>{errors.code}</FormFeedback>}*/}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="name">Program name</Label>
                  <Input type="text" id="name" name="name"
                         onChange={this.props.handleChange}
                         onBlur={this.props.handleBlur}
                         defaultValue={values.name}
                         invalid={errors.name}
                         className={errors.name && 'is-invalid'}
                  />
                  {/*<FieldName name="name"*/}
                             {/*options={optionsProgramTemplates}*/}
                             {/*value={values.name}*/}
                             {/*onChange={this.props.setFieldValue}*/}
                             {/*onBlur={this.props.setFieldTouched}*/}
                             {/*touched={touched.name}*/}
                             {/*invalid={errors.name} />*/}
                  {errors.name && <FormFeedback>{errors.name}</FormFeedback>}
                </Col>
              </FormGroup>

              {!touched.category && selectedProgramTemplateOption ?
                !prefilledProgramTemplateId ?
                  <Col md={{size:8}}>
                    <Alert color="info">Would you like to prefill this form with known information for "{selectedProgramTemplateOption.label}"?
                      <br/>
                      <Button color="link" className="alert-link" onClick={() => this.handlePrefill(selectedProgramTemplateOption.value)}>Yes please, prefill.</Button></Alert>
                  </Col> :
                  null :
                null
              }


              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="category">Program Focus Area</Label>
                  <FieldRadioList name="category"
                                   value={values.category}
                                   options={this.optionsLevel1Categories}
                                   onChange={setFieldValue}
                                   onBlur={setFieldTouched}
                                   error={errors.category}
                  />
                </Col>
              </FormGroup>


              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="participantGroups">Who is the program for?</Label>
                  <FieldCheckboxList name="participantGroups"
                                     value={values.participantGroups}
                                     options={this.optionsParticipantGroups}
                                     error={errors.participantGroups}
                  />
                </Col>
              </FormGroup>

              {values.participantGroups &&
                values.participantGroups.find(group => group === 'Community') &&
                <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="participantGroupsDescription">Who in the community?</Label>
                  <FieldTextInput name="participantGroupsDescription"
                                  className={errors.participantGroupsDescription}
                  />
                  {errors.participantGroupsDescription && <FormFeedback>{errors.participantGroupsDescription}</FormFeedback>}
                  <FormText color="muted">
                    Example: Partner schools students, charities, aged care residents
                  </FormText>
                </Col>
              </FormGroup>
              }


              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="subCategory">Program Category</Label>
                  <FieldSelect name="subCategory"
                               clearable={false}
                               options={optionsLevel2Categories}
                               disabled={typeof values.category === 'undefined'}
                               value={values.subCategory}
                               onChange={this.props.setFieldValue}
                               onBlur={this.props.setFieldTouched}
                               placeholder="First select a Program Focus Area"
                               touched={touched.subCategory}
                               invalid={errors.subCategory}
                  />
                  {errors.subCategory && <FormFeedback>{errors.subCategory}</FormFeedback>}
                </Col>
              </FormGroup>



              <FormGroup row>
                <Col md={8}>
                  <Label>For Year Levels</Label>
                  <FieldCheckboxList name="yearLevels"
                                     value={values.yearLevels}
                                     options={this.optionsYearLevels}
                                     error={errors.yearLevels}
                                     inline={true}
                  />
                  <FormText color="muted">
                    Which year levels are participating in this program?
                  </FormText>
                </Col>
              </FormGroup>



              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="cohortSize">Number of Participants</Label>
                  <FieldNumberInput name="cohortSize"
                                    min={1}
                                    max={3000}
                                    className={errors.cohortSize && 'is-invalid'}
                  />
                  {errors.cohortSize && <FormFeedback>{errors.cohortSize}</FormFeedback>}
                  <FormText color="muted">
                    How many people participated in this program?
                  </FormText>
                </Col>
              </FormGroup>


              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="terms">Terms delivered</Label>
                  <FieldCheckboxList name="terms"
                                     value={values.terms}
                                     options={this.optionsTerms}
                                     error={errors.terms}
                                     inline={true}
                  />
                  {errors.terms && <FormFeedback>{errors.terms}</FormFeedback>}
                </Col>
              </FormGroup>




              <FormGroup hidden>
                <Label htmlFor="year">Year delivered</Label>
                <FieldTextInput name="year" />
              </FormGroup>


            </fieldset>


            <fieldset className={style.fieldset}>
              <legend>Why did the program happen?</legend>

              <FormGroup row>
                <Col md={8}>
                  <Label>Does the program cater to a particular focus group?</Label>
                  <FieldRadioList name="focusGroup"
                                     value={values.focusGroup}
                                     options={this.optionsFocusGroup}
                                     onChange={setFieldValue}
                                     onBlur={setFieldTouched}
                                     error={errors.focusGroup}
                  />
                </Col>
              </FormGroup>

              {values.focusGroup === 'Other' &&
                <FormGroup row>
                  <Col md={8}>
                    <FieldTextInput name="focusGroupOther"
                                    className={errors.focusGroupOther && 'is-invalid'}
                    />
                    {errors.focusGroupOther && <FormFeedback>{errors.focusGroupOther}</FormFeedback>}
                  </Col>
                </FormGroup>
              }



              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="aims">Aims</Label>
                  <FieldTextareaInput name="aims"
                                      className={errors.aims && 'is-invalid'}
                  />
                  <FormText color="muted">
                    Briefly describe what outcomes the program hopes to achieve.
                  </FormText>
                  <FormFeedback>{errors.aims}</FormFeedback>
                  {errors.aims && <FormFeedback>{errors.aims}</FormFeedback>}
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="description">Program overview</Label>
                  <FieldTextareaInput name="description"
                                      className={errors.description && 'is-invalid'}
                  />
                  {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                  <FormText color="muted">
                    What does the program does in a nutshell?
                  </FormText>
                </Col>
              </FormGroup>



            </fieldset>


            <fieldset className={style.fieldset}>
              <legend>Who and how?</legend>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="staff">Staff involved</Label>
                  <FieldSelectTags name="staff"
                                   options={this.optionsStaff}
                                   value={values.staff}
                                   onChange={this.props.setFieldValue}
                                   onBlur={this.props.setFieldTouched}
                                   touched={touched.staff}
                                   invalid={errors.staff}
                  />
                  {errors.staff && <FormFeedback>{errors.staff}</FormFeedback>}
                  <FormText color="muted">
                    Who are the staff members involved in organising or facilitating the program?
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={8}>
                  <Label>Provider</Label>
                  <FieldRadioList options={this.optionsDeliveredByType}
                                     name="deliveredByType"
                                     value={values.deliveredByType}
                                     onChange={setFieldValue}
                                     onBlur={setFieldTouched}
                                     error={errors.deliveredByType}
                                  inline={true}
                  />
                  <FormText color="muted">
                    Is the program run by school staff or another provider?
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="externalProvider">Who is the External Provider?</Label>
                  <FieldTextInput name="externalProvider"
                                  className={errors.externalProvider && 'is-invalid'}
                  />
                  {errors.externalProvider && <FormFeedback>{errors.externalProvider}</FormFeedback>}
                </Col>
              </FormGroup>

              {!values.descriptionFull && showDescriptionFull === false && <p><Button color="link" onClick={() => this.setState({showDescriptionFull: true})}>Would you like to add more Program information?</Button></p>}

              {values.descriptionFull || showDescriptionFull === true ?
                <FormGroup row>
                  <Col md={8}>
                    <Label htmlFor="descriptionFull">Detailed description</Label>
                    <FieldTextareaInput name="descriptionFull"
                                        rows={6}
                                        className={errors.descriptionFull && 'is-invalid'}
                    />
                    {errors.descriptionFull && <FormFeedback>{errors.descriptionFull}</FormFeedback>}
                    <FormText color="muted">
                      A comprehensive full length description of the program. Describe the structure of the program, and how
                      it is delivered.
                    </FormText>
                  </Col>
                </FormGroup> : null}

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="website">Website</Label>
                  <FieldUrlInput name="website"
                                 className={errors.website && 'is-invalid'}
                  />
                  {errors.website && <FormFeedback>{errors.website}</FormFeedback>}
                  <FormText color="muted">
                    Some programs have a website for more information.
                  </FormText>
                </Col>
              </FormGroup>

            </fieldset>


            <fieldset className={style.fieldset}>
              <legend>Meta data</legend>

              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="tags">Keywords</Label>
                  <FieldSelectTags name="tags"
                                   options={this.optionsTags}
                                   value={values.tags}
                                   onChange={this.props.setFieldValue}
                                   onBlur={this.props.setFieldTouched}
                                   touched={touched.tags}
                                   invalid={errors.tags}
                  />
                  {errors.tags && <FormFeedback>{errors.tags}</FormFeedback>}
                  <FormText color="muted">
                    Keywords could help others to search for programs like this one in the future.
                  </FormText>
                </Col>
              </FormGroup>

            </fieldset>



            <Col md={8}>
              <Link to="account">Cancel</Link>
              <Button type="submit" color="primary" className="float-right"
                      disabled={isSubmitting}>
                {isEdit ?
                  isSubmitting ? 'Updating...' : 'Update' :
                  isSubmitting ? 'Adding...' : 'Add'
                }
              </Button>
            </Col>

          </Form>
        </Col>
        <Col md={{size:3}}>
          <code>
            {JSON.stringify(values)}
          </code>
        </Col>
      </Row>
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

    if (isRequired(values.name)) {
      errors.name = 'Required';
    }
    if (isRequired(values.code)) {
      errors.code = 'Required';
    }
    if (isRequired(values.description)) {
      errors.description = 'Required';
    }

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

