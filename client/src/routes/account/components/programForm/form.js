import React from 'react';
import {
  Form,
  Button,
  Col,
  Row,
} from 'reactstrap';
import {
  withFormik,
} from 'formik';
import Bows from 'bows';
import { Link } from 'react-router-dom';
import get from 'lodash/get';

import ErrorSummary from 'components/errorSummary';
import {
  getSchoolYearLevelsOptions,
  getLevel1Categories,
  // getLevel2Categories,
  getStaffOptions,
  getTermsOptions,
  getSchoolsOptions,
  // getProgramTemplateOptions,
  getAudienceScope,
} from 'store/programs/formHelpers';
// import { CircleLoading } from 'components/loading';

import { FauxIndexedPartLayout } from './indexedPartLayout';

import FieldTextInput from 'components/fieldTextInput';



import { isRequired } from 'helpers/validators';

import Part1School from './parts/part1School';
import Part2Name from './parts/part2Name';
import Part3Focus from './parts/part3Focus';
import Part4Audience from './parts/part4Audience';
import Part5Terms from './parts/part5Terms';
import Part6FocusGroup from './parts/part6FocusGroup';
import Part7Aim from './parts/part7Aim';
import Part8Overview from './parts/part8Overview';
import Part9Staff from './parts/part9Staff';
import Part10DeliveredBy from './parts/part10DeliveredBy';
// import Part11Additional from './parts/part11Additional';

import style from './style.scss';


const log = Bows('Form');

class ProgramForm extends React.Component {

  constructor(props) {
    super(props);
    // this.handlePrefill = this.handlePrefill.bind(this);

    this.optionsSchoolCodes = getSchoolsOptions(props.schools);
    this.optionsYearLevels = getSchoolYearLevelsOptions(props.school);
    this.optionsParticipantGroups = get(props, 'staticData.participantGroupsOptions');
    this.optionsFocusGroup = get(props, 'staticData.focusGroupOptions');
    this.optionsDeliveredByType = get(props, 'staticData.deliveredByTypeOptions');
    this.optionsTags = get(props, 'staticData.tagsOptions');
    this.optionsTerms = getTermsOptions(props.year);
    this.optionsLevel1Categories = getLevel1Categories(get(props, 'staticData.categoriesOptions'));
    this.optionsStaff = getStaffOptions(get(props, 'staticData.staffList'));
    this.optionsAudienceScope = getAudienceScope();

    // this.state = {
    //   showDescriptionFull: false,
    //   prefilledProgramTemplateId: null,
    // };
  }

  componentDidMount() {
    // const { programTemplates } = this.props;
    //
    // if (typeof programTemplates !== 'undefined') {
    //   if (!programTemplates || !programTemplates.length) {
    //     this.props.fetchProgramTemplates();
    //   }
    // }
    // todo - fetch schools
  }

  // handlePrefill(programTemplateId) {
  //   const {
  //     selectProgramTemplate,
  //     setValues,  // formik
  //     // validateForm,
  //   } = this.props;
  //   const programTemplate = selectProgramTemplate(programTemplateId);
  //
  //   if (programTemplate) {
  //     log('Prefilling: ', JSON.stringify(programTemplate));
  //
  //     delete programTemplate.updatedAt;
  //     delete programTemplate.updatedBy;
  //     delete programTemplate.createdAt;
  //     delete programTemplate.createdBy;
  //     delete programTemplate.id;
  //     delete programTemplate.name;
  //
  //     // exclude all null values
  //     Object.keys(programTemplate).forEach(key => {
  //       const value = programTemplate[key];
  //       if (value === null) {
  //         delete programTemplate[key];
  //       }
  //     });
  //
  //     setValues(programTemplate);
  //     // validateForm();
  //   } else {
  //     // todo
  //   }
  //
  //   this.setState({prefilledProgramTemplateId: programTemplateId});
  // }

  render() {
    // const {
    //   showDescriptionFull,
    //   prefilledProgramTemplateId,
    // } = this.state;

    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleSubmit,
      setFieldValue,
      setFieldTouched,

      isEdit,
      // isFetchingProgramTemplates,
      // programTemplates,
    } = this.props;

    log('values:', values);

    // if (!schools) {
    //   return <Loading />
    // }

    // if (isFetchingProgramTemplates !== false) {
    //   return <CircleLoading />
    // }

    // const optionsLevel2Categories = getLevel2Categories(this.optionsLevel1Categories, values.category);
    // const optionsProgramTemplates = getProgramTemplateOptions(programTemplates);

    // const selectedProgramTemplateOption = function() {
    //   if (touched.name && values.name) {
    //     const matched = optionsProgramTemplates.find(p => p.value === values.name);
    //     if (matched) {
    //       return matched;
    //     }
    //   }
    //   return null;
    // }();


    log('Form validation errors: ', JSON.stringify(errors));

    return (
      <div>
        <Row>
          <Col lg={{size:9}}>
            <Form noValidate={true} onSubmit={handleSubmit} className={style.programForm}>

              {isEdit && <FieldTextInput name="id" disabled={true} hidden />}
              {isEdit ?
                <FieldTextInput name="updatedBy" disabled={true} hidden /> :
                <FieldTextInput name="createdBy" disabled={true} hidden />
              }

              <Part1School index="1" totalIndex="10"
                           values={values}
                           errors={errors}
                           touched={touched}
                           optionsSchoolCodes={this.optionsSchoolCodes}
                           isDisabled={isEdit}
                           setFieldValue={setFieldValue}
                           setFieldTouched={setFieldTouched}
              />
              <Part2Name index="2" totalIndex="10"
                         values={values}
                         errors={errors}
              />
              <Part3Focus index="3" totalIndex="10"
                          values={values}
                          errors={errors}
                          setFieldValue={setFieldValue}
                          setFieldTouched={setFieldTouched}
                          optionsLevel1Categories={this.optionsLevel1Categories}
              />
              <Part4Audience index="4" totalIndex="10"
                             values={values}
                             errors={errors}
                             optionsAudienceScope={this.optionsAudienceScope}
                             optionsYearLevels={this.optionsYearLevels}
              />
              <Part5Terms index="5" totalIndex="10"
                          values={values}
                          errors={errors}
                          optionsTerms={this.optionsTerms}
              />
              <Part6FocusGroup index="6" totalIndex="10"
                               values={values}
                               errors={errors}
                               optionsFocusGroup={this.optionsFocusGroup}
                               setFieldValue={setFieldValue}
                               setFieldTouched={setFieldTouched}
              />
              <Part7Aim index="7" totalIndex="10"
                        values={values}
                        errors={errors}
              />
              <Part8Overview index="8" totalIndex="10"
                             values={values}
                             errors={errors}
              />
              <Part9Staff index="9" totalIndex="10"
                          values={values}
                          errors={errors}
                          touched={touched}
                          setFieldValue={setFieldValue}
                          setFieldTouched={setFieldTouched}
                          optionsStaff={this.optionsStaff}
              />
              <Part10DeliveredBy index="10" totalIndex="10"
                                 values={values}
                                 errors={errors}
                                 optionsDeliveredByType={this.optionsDeliveredByType}
              />
              {/*<Part11Additional index="optional"*/}
                                {/*values={values}*/}
                                {/*errors={errors}*/}
              {/*/>*/}


              <FauxIndexedPartLayout>
                <Row>
                  <Col md={8}>
                    {errors && errors.length &&
                      <ErrorSummary errors={errors}/>
                    }
                    <div className="float-right">
                      <Button color="link" tag={Link} to="account" className="mr-5">Cancel</Button>
                      <Button type="submit" color="primary"
                              disabled={isSubmitting}>
                        {isEdit ?
                          isSubmitting ? 'Updating...' : 'Update' :
                          isSubmitting ? 'Adding...' : 'Add'
                        }
                      </Button>
                    </div>
                  </Col>
                </Row>
              </FauxIndexedPartLayout>

            </Form>
          </Col>

          <Col lg={{size:3}} className={style.sidebar}>
            <code>
            {JSON.stringify(values)}
            </code>
          </Col>
        </Row>
      </div>
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





{/*<fieldset>*/}
  {/*<FormGroup>*/}
    {/*<Col md={8}>*/}
      {/*<Label htmlFor="participantGroups">Who is the program for?</Label>*/}
      {/*<FieldCheckboxList name="participantGroups"*/}
                         {/*value={values.participantGroups}*/}
                         {/*options={this.optionsParticipantGroups}*/}
                         {/*error={errors.participantGroups}*/}
      {/*/>*/}
    {/*</Col>*/}
  {/*</FormGroup>*/}

  {/*{values.participantGroups &&*/}
  {/*values.participantGroups.find(group => group === 'Community') &&*/}
  {/*<FormGroup row>*/}
    {/*<Col md={8}>*/}
      {/*<Label htmlFor="participantGroupsDescription">Who in the community?</Label>*/}
      {/*<FieldTextInput name="participantGroupsDescription"*/}
                      {/*error={errors.participantGroupsDescription}*/}
      {/*/>*/}
      {/*<FormText color="muted">*/}
        {/*Example: Partner schools students, charities, aged care residents*/}
      {/*</FormText>*/}
    {/*</Col>*/}
  {/*</FormGroup>*/}
  {/*}*/}

  {/*<FormGroup row>*/}
    {/*<Col md={8}>*/}
      {/*<Label htmlFor="subCategory">Program Category</Label>*/}
      {/*<FieldSelect name="subCategory"*/}
                   {/*clearable={false}*/}
                   {/*options={optionsLevel2Categories}*/}
                   {/*disabled={typeof values.category === 'undefined'}*/}
                   {/*value={values.subCategory}*/}
                   {/*onChange={this.props.setFieldValue}*/}
                   {/*onBlur={this.props.setFieldTouched}*/}
                   {/*placeholder="First select a Program Focus Area"*/}
                   {/*touched={touched.subCategory}*/}
                   {/*error={errors.subCategory}*/}
      {/*/>*/}
    {/*</Col>*/}
  {/*</FormGroup>*/}





{/*</fieldset>*/}


{/*<fieldset className={style.fieldset} id="step-3">*/}

  {/*{!values.descriptionFull && showDescriptionFull === false && <p><Button color="link" onClick={() => this.setState({showDescriptionFull: true})} className={`${style.formTextBtn} pl-0`}>Would you like to add more Program information?</Button></p>}*/}

{/*{values.descriptionFull || showDescriptionFull === true ?*/}
  {/*<FormGroup row>*/}
    {/*<Col md={8}>*/}
      {/*<Label htmlFor="descriptionFull">Detailed description</Label>*/}
      {/*<FieldTextareaInput name="descriptionFull"*/}
                          {/*rows={6}*/}
                          {/*error={errors.descriptionFull}*/}
      {/*/>*/}
      {/*<FormText color="muted">*/}
        {/*A comprehensive full length description of the program. Describe the structure of the program, and how*/}
        {/*it is delivered.*/}
      {/*</FormText>*/}
    {/*</Col>*/}
  {/*</FormGroup> : null}*/}

{/*<FormGroup row>*/}
  {/*<Col md={8}>*/}
    {/*<Label htmlFor="website">Website</Label>*/}
    {/*<FieldUrlInput name="website"*/}
                   {/*error={errors.website}*/}
    {/*/>*/}
    {/*<FormText color="muted">*/}
      {/*Some programs have a website for more information.*/}
    {/*</FormText>*/}
  {/*</Col>*/}
{/*</FormGroup>*/}

{/*</fieldset>*/}


{/*<fieldset className={style.fieldset} id="step-4">*/}
  {/*<legend>Other</legend>*/}

  {/*<FormGroup row>*/}
    {/*<Col md={8}>*/}
      {/*<Label htmlFor="tags">Keywords</Label>*/}
      {/*<FieldSelectTags name="tags"*/}
                       {/*options={this.optionsTags}*/}
                       {/*value={values.tags}*/}
                       {/*onChange={this.props.setFieldValue}*/}
                       {/*onBlur={this.props.setFieldTouched}*/}
                       {/*touched={touched.tags}*/}
                       {/*error={errors.tags}*/}
      {/*/>*/}
      {/*<FormText color="muted">*/}
        {/*Keywords could help others to search for programs like this one in the future.*/}
      {/*</FormText>*/}
    {/*</Col>*/}
  {/*</FormGroup>*/}

{/*</fieldset>*/}
