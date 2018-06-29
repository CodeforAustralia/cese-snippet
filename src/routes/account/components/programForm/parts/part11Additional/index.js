import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';

import IndexedPartLayout from './../../indexedPartLayout';
import AdditionalFormGroup from './../../additionalFormGroup';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import FieldSelect from 'components/fieldSelect';

const Part11Additional = ({
                            index,
                            totalIndex,
                            values,
                            errors,
                            touched,
                            setFieldValue,
                            setFieldTouched,
                            optionsSefDomain,
                            optionsSefElements,
                          }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <AdditionalFormGroup title="School Excellence Framework (SEF)">
          <div>
            <FormGroup row>
              <Col md={8}>
                <Label for="sefDomain">Domain</Label>
                <FieldRadioBtnList name="sefDomain"
                                   value={values.sefDomain}
                                   error={errors.sefDomain}
                                   touched={touched.sefDomain}
                                   options={optionsSefDomain}
                                   onChange={setFieldValue}
                                   className={errors.sefDomain && 'is-invalid'}
                                   inline={true}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="sefElements">Elements</Label>
                <FieldSelect name="sefElements"
                             value={values.sefElements}
                             options={optionsSefElements}
                             searchable={false}
                             onChange={setFieldValue}
                             onBlur={setFieldTouched}
                             placeholder="Select …"
                             touched={touched.sefElements}
                             className={errors.sefElements && 'is-invalid'}
                />
              </Col>
            </FormGroup>
          </div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Cost">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Website and Contact Details">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Additional Program Details">
          <div>[field]</div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="📎 Attach resources or materials">
          <div>[field]</div>
        </AdditionalFormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part11Additional;
