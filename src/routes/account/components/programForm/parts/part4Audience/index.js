import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldRadioList from 'components/fieldRadioList';
import FieldCheckboxBtnList from 'components/fieldCheckboxBtnList';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import IndexedPartLayout from './../../indexedPartLayout';

const Part4Audience = ({
                         index,
                         totalIndex,
                         values,
                         errors,
                         optionsAudienceScope,
                         optionsYearLevels,
                         optionsCohortSize,
                         setFieldValue,
}) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label for="audienceScope">Audience Scope</Label>
            <FieldRadioList name="audienceScope"
                            value={values.audienceScope}
                            error={errors.audienceScope}
                            options={optionsAudienceScope}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8}>
            <Label>Year Levels</Label>
            <FieldCheckboxBtnList name="yearLevels"
                               value={values.yearLevels}
                               options={optionsYearLevels}
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
            <FieldRadioBtnList name="cohortSize"
                               options={optionsCohortSize}
                               error={errors.cohortSize}
                               value={values.cohortSize}
                               onChange={setFieldValue}
                               inline={true}
                               spaced={true}
            />
            <FormText color="muted">
              How many people participated in this program?
            </FormText>
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part4Audience;
