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

import ErrorSummary from 'components/errorSummary';
// import { CircleLoading } from 'components/loading';
import * as cmsHelper from 'store/cms/helpers';

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
    this.optionsSchoolCodes = cmsHelper.getSchoolsOptions(props.schools);
    this.optionsYearLevels = cmsHelper.getSchoolYearLevelsOptions(props.school);
    this.optionsStaff = cmsHelper.getStaffOptions(props.cmsProps.staffList);
    // this.state = {
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
      cmsProps,
    } = this.props;

    log('values:', values);

    // if (!schools) {
    //   return <Loading />
    // }

    // if (isFetchingProgramTemplates !== false) {
    //   return <CircleLoading />
    // }

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
                          touched={touched}
                          setFieldValue={setFieldValue}
                          setFieldTouched={setFieldTouched}
                          optionsCategories={cmsHelper.getCategoriesOptions(cmsProps)}
              />
              <Part4Audience index="4" totalIndex="10"
                             values={values}
                             errors={errors}
                             optionsAudienceScope={cmsHelper.getAudienceScope(cmsProps)}
                             optionsYearLevels={cmsHelper.getYearLevelsOptions(cmsProps)}
              />
              <Part5Terms index="5" totalIndex="10"
                          values={values}
                          errors={errors}
                          optionsTerms={cmsHelper.getTermsOptions(cmsProps)}
              />
              <Part6FocusGroup index="6" totalIndex="10"
                               values={values}
                               errors={errors}
                               optionsFocusGroup={cmsHelper.getFocusGroupOptions(cmsProps)}
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
                                 optionsDeliveredByType={cmsHelper.getDeliveredByTypeOptions(cmsHelper)}
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
