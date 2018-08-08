import React from 'react';
import { withFormik } from 'formik';
import {
  FormGroup,
  Button,
  Label,
  Col,
  Form,
} from 'reactstrap';
import Bows from 'bows';

import * as cmsHelper from 'store/cms/helpers';
import IndexedPartLayout from './indexedPartLayout';
import FieldSelect from "components/fieldSelect";
import FieldTextInput from "components/fieldTextInput";
import ErrorSummary from 'components/errorSummary';

import Focus from './fieldParts/focus';
import Audience from './fieldParts/audience';
import Terms from './fieldParts/terms';
import FocusGroup from './fieldParts/focusGroup';
import Aim from './fieldParts/aim';
import Overview from './fieldParts/overview';
import DeliveredBy from './fieldParts/deliveredBy';
import Additional from './fieldParts/additional';

import style from './style.scss';


const log = Bows('F: ProgramEdit');

const ProgramEditForm = ({
                           optionsSchools,
                           cms,

                           handleSubmit,
                           values,
                           setFieldValue,
                           setFieldTouched,
                           errors,
                           touched,
                           isSubmitting,
                         }) => {
  return (
    <Form noValidate={true} onSubmit={handleSubmit} className={style.programForm}>

      <FieldTextInput name="id" disabled={true} hidden />
      <FieldTextInput name="updatedBy" disabled={true} hidden />

      <IndexedPartLayout index="1" totalIndex="10">
        <div>
          <FormGroup>
            <Label htmlFor="schoolCode">School</Label>
            <FieldSelect name="schoolCode"
                         options={optionsSchools}
                         value={values.schoolCode}
                         onChange={setFieldValue}
                         onBlur={setFieldTouched}
                         error={errors.schoolCode}
                         disabled
            />
          </FormGroup>
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="2" totalIndex="10">
        <div>
          <FormGroup>
            <Label htmlFor="name">Program name</Label>
            <FieldTextInput name="name" disabled />
          </FormGroup>
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="3" totalIndex="10">
        <div>
          <Focus values={values}
                 errors={errors}
                 touched={touched}
                 setFieldValue={setFieldValue}
                 setFieldTouched={setFieldTouched}
                 optionsCategories={cmsHelper.getCategoriesOptions(cms)} />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="4" totalIndex="10">
        <div>
          <Audience values={values}
                    errors={errors}
                    optionsAudienceScope={cmsHelper.getAudienceScope(cms)}
                    optionsYearLevels={cmsHelper.getYearLevelsOptions(cms)}
                    optionsCohortSize={cmsHelper.getCohortSizeOptions(cms)}
                    setFieldValue={setFieldValue}
          />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="5" totalIndex="10">
        <div>
          <Terms values={values}
                 errors={errors}
                 optionsTerms={cmsHelper.getTermsOptions(cms)}
                 setFieldValue={setFieldValue}
          />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="6" totalIndex="10">
        <div>
          <FocusGroup values={values}
                           errors={errors}
                           optionsFocusGroup={cmsHelper.getFocusGroupOptions(cms)}
                           setFieldValue={setFieldValue}
                           setFieldTouched={setFieldTouched}
          />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="7" totalIndex="10">
        <div>
          <Aim values={values}
               errors={errors}
          />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="8" totalIndex="10">
        <div>
          <Overview values={values}
                         errors={errors}
          />
        </div>
      </IndexedPartLayout>

      <IndexedPartLayout index="9" totalIndex="10">
        <div>
          <DeliveredBy values={values}
                       errors={errors}
                       optionsDeliveredByType={cmsHelper.getDeliveredByTypeOptions(cms)}
          />
        </div>
      </IndexedPartLayout>

      {/*<IndexedPartLayout index="optional">*/}
        {/*<label>Additional Information</label>*/}
        {/*<div>*/}
          {/*<Additional values={values}*/}
                      {/*errors={errors}*/}
                      {/*touched={touched}*/}
                      {/*setFieldValue={setFieldValue}*/}
                      {/*setFieldTouched={setFieldTouched}*/}
                      {/*optionsSefDomain={cmsHelper.getSefDomainOptions(cms)}*/}
          {/*/>*/}
        {/*</div>*/}
      {/*</IndexedPartLayout>*/}

      <Col md={8} className="mt-4">
        {errors && errors.length &&
          <ErrorSummary errors={errors} />
        }

        <Button type="submit" color="primary" size="lg" disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save'}</Button>
      </Col>

    </Form>
  )
};

export default withFormik({
  displayName: 'addSnippet',
  mapPropsToValues: (props) => {
    return {
      ...{
        name: "",
        schoolCode: "",
        programTemplateId: '',
        category: "",
        subCategory: "",
        aims: "",
        description: "",
        website: "",
        participantGroups: [],
        participantGroupsDescription: "",
        focusGroup: "",
        focusGroupOther: "",
        yearLevels: [],
        cohortSize: "",
        deliveredByType: "",
        externalProvider: "",
        staff: [],
        year: "",
        terms: [],
        tags: [],
      },
      ...props.model,
      updatedBy: props.sessionUser.id,
    };
  },
  validate: (values, props) => {
    const errors = {};

    if (!values.schoolCode) {
      errors.schoolCode = 'Required';
    }
    if (!values.year) {
      errors.year = 'Required';
    }

    if (Object.keys(errors).length) {
      log(`invalid: ${JSON.stringify(errors)}`);
    }

    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    log(`submitting - ${JSON.stringify(values)}`);

    props.onBeforeSubmit && props.onBeforeSubmit();

    return props.onSubmit(values).then(
      resp => {
        log(`success - ${JSON.stringify(resp)}`);
        setSubmitting(false);
        return resp;
      },
      errors => {
        log(`error - ${JSON.stringify(errors)}`);
        setSubmitting(false);
        return errors;
      }
    ).then(() => {
      props.onSubmitSuccess && props.onSubmitSuccess();
    });
  }
})(ProgramEditForm);

