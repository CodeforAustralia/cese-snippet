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
import FieldTextareaInput from 'components/fieldTextAreaInput';
import FieldUrlInput from 'components/fieldUrlInput';
import FieldTextInput from 'components/fieldTextInput';
import FieldEmailInput from 'components/fieldEmailInput';


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
      <label>Additional Information</label>
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
                                   inline={true}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
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
          <div>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="costDescription" className="mb-1">Program Overview</Label>
                <FormText color="muted" className="mt-0 mb-2">
                  Include details about all related costs such as training, tools, equipments, fees, etc
                </FormText>
                <FieldTextareaInput name="costDescription"
                                    error={errors.costDescription}
                                    rows={4}
                />
              </Col>
            </FormGroup>
          </div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Website and Contact Details">
          <div>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="contactWebsite" className="mb-1">Website</Label>
                <FieldUrlInput name="contactWebsite" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="contactPerson" className="mb-1">Contact Person</Label>
                <FieldTextInput name="contactPerson" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="contactNumber" className="mb-1">Contact Number</Label>
                <FieldTextInput name="contactNumber" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={8}>
                <Label htmlFor="contactEmail" className="mb-1">Contact Email</Label>
                <FieldEmailInput name="contactEmail" />
              </Col>
            </FormGroup>
          </div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="Additional Program Details">
          <div>
            <FormGroup row>
              <Col>
                <Label htmlFor="additionalDetails" className="mb-1">Additional Program Details</Label>
                <FormText color="muted" className="mt-0 mb-2">
                  Include any addutional information about the program
                </FormText>
                <FieldTextareaInput name="additionalDetails"
                                    error={errors.additionalDetails}
                                    rows={4}
                />
              </Col>
            </FormGroup>
          </div>
        </AdditionalFormGroup>
        <AdditionalFormGroup title="📎 Attach resources or materials" disabled>
          <div>[field]</div>
        </AdditionalFormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part11Additional;
