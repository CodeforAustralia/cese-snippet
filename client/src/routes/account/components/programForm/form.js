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
} from 'reactstrap';
import { withFormik } from 'formik';
import Bows from 'bows';
import { Link } from 'react-router-dom';

import Loading from 'components/loading';
import FieldSelect from 'components/fieldSelect';
import FieldSelectTags from 'components/fieldSelectTags';
import FieldNumberInput from 'components/fieldNumberInput';
import FieldUrlInput from 'components/fieldUrlInput';
import FieldTextInput from 'components/fieldTextInput';
import FieldTextareaInput from 'components/fieldTextAreaInput';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import FieldCheckboxList from 'components/fieldCheckboxList';

import FieldCode from './../fieldCode';
import FieldName from './../fieldName';


const log = Bows('Form');

class ProgramForm extends React.Component {

  constructor(props) {
    super(props);
    this.handlePrefill = this.handlePrefill.bind(this);
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
      // handleChange,
      // handleBlur,
      isSubmitting,
      handleSubmit,
      setFieldValue,
      setFieldTouched,

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
      return <Loading />
    }

    if (isFetchingProgramTemplates !== false) {
      return <Loading />
    }

    const getLevel1Cats = () => staticData.categories.map(level1 => {
      // return {value: level1.value, label: level1.label};
      return {value: level1.label, label: level1.label};
    });

    const getLevel2Cats = (level1Value) => {
      const level1Cat = staticData.categories.find(level1 => level1.value === level1Value);
      if (!level1Cat) {
        return [];
      }
      return level1Cat.categories.map(level2 => {
        // return {value: level2.value, label: level2.label};
        return {value: level2.label, label: level2.label};
      });
    };

    const getStaffOptions = () => staticData.staffList.map((staff) => (
      {value: staff.id, label: staff.email}
    ));

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
      <Row>
        <Col md={{size:9}}>

          <Form noValidate={true} onSubmit={handleSubmit}>
            {isEdit &&
            <FieldTextInput name="id" disabled={true} hidden />
            }
            {isEdit ?
              <FieldTextInput name="updatedBy" disabled={true} hidden /> :
              <FieldTextInput name="createdBy" disabled={true} hidden />
            }


            <FormGroup row>
              <Col md={8}>
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
              <Col md={8}>
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
                    <Button color="link" className="alert-link" onClick={() => this.handlePrefill(selectedProgramTemplateOption.value)}>Yes please, prefill.</Button></Alert>
                </div> :
                null :
              null
            }

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="category">Program Focus Area</Label>
                <FieldRadioBtnList name="category"
                                   value={values.category}
                                   options={level1CategoryOptions}
                                   onChange={setFieldValue}
                                   onBlur={setFieldTouched}
                                   invalid={errors.category}
                                   vertical={true}
                />
                {!!errors.category && touched.category && <FormFeedback>{errors.category}</FormFeedback>}
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label>For Year Levels</Label>
                <FieldCheckboxList name="yearLevels"
                                   value={values.yearLevels}
                                   options={yearLevelsOptions}
                />
                {touched.yearLevels && errors.yearLevels && <FormFeedback>{errors.yearLevels}</FormFeedback>}
                <FormText color="muted">
                  Which year levels are participating in this program?
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
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
              <Col md={8}>
                <Label htmlFor="aims">Aims</Label>
                <FieldTextareaInput name="aims" />
                <FormText color="muted">
                  Briefly describe what outcomes the program hopes to achieve.
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="description">Program overview</Label>
                <FieldTextareaInput name="description" />
                <FormText color="muted">
                  What does the program does in a nutshell?
                </FormText>
              </Col>
            </FormGroup>

            {!values.descriptionFull && showDescriptionFull === false && <p><Button color="link" onClick={() => this.setState({showDescriptionFull: true})}>Would you like to add a longer description?</Button></p>}

            {values.descriptionFull || showDescriptionFull === true ?
              <FormGroup row>
                <Col md={8}>
                  <Label htmlFor="descriptionFull">Detailed description</Label>
                  <FieldTextareaInput name="descriptionFull" rows={6} />
                  <FormText color="muted">
                    A comprehensive full length description of the program. Describe the structure of the program, and how
                    it is delivered.
                  </FormText>
                </Col>
              </FormGroup> : null}

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="website">Website</Label>
                <FieldUrlInput name="website" />
                <FormText color="muted">
                  Some programs have a website for more information.
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="participantGroups">Who is the program for?</Label>
                <FieldCheckboxList name="participantGroups"
                                   value={values.participantGroups}
                                   options={participantGroupsOptions}
                />
                {touched.participantGroups && errors.participantGroups &&
                <FormFeedback>{errors.participantGroups}</FormFeedback>}
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="participantGroupsDescription">Who in the community?</Label>
                <FieldTextInput name="participantGroupsDescription" />
                <FormText color="muted">
                  Example: Partner schools students, charities, aged care residents
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label>Does the program cater to a particular focus group?</Label>
                <FieldRadioBtnList name="focusGroup"
                                   value={values.focusGroup}
                                   options={focusGroupOptions}
                                   onChange={setFieldValue}
                                   onBlur={setFieldTouched}
                                   invalid={errors.focusGroup}
                                   vertical={true}
                />
              </Col>
            </FormGroup>

            {values.focusGroup === 'Other' &&
            <FormGroup row>
              <Col md={8}>
                <FieldTextInput name="focusGroupOther" />
              </Col>
            </FormGroup>
            }

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="cohortSize">Number of Participants</Label>
                <FieldNumberInput name="cohortSize" min={1} max={3000} />
                <FormText color="muted">
                  How many people participated in this program?
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label>Provider</Label>
                <FieldRadioBtnList options={deliveredByTypeOptions}
                                   name="deliveredByType"
                                   value={values.deliveredByType}
                                   onChange={setFieldValue}
                                   onBlur={setFieldTouched}
                                   vertical={true}
                />
                <FormText color="muted">
                  Is the program run by school staff or another provider?
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="externalProvider">Who is the External Provider?</Label>
                <FieldTextInput name="externalProvider" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
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
              <FieldTextInput name="year" />
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="terms">Terms delivered</Label>
                <FieldCheckboxList name="terms"
                                   value={values.yearLevels}
                                   options={termsOptions}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={8}>
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

            <Col md={8}>
              <Link to="account">Cancel</Link>
              <Button type="submit" color="primary" size="lg" className="float-right"
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

