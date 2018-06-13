import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldRadioList from 'components/fieldRadioList';
import FieldCheckboxList from 'components/fieldCheckboxList';
import FieldNumberInput from 'components/fieldNumberInput';
import IndexedPartLayout from './../../indexedPartLayout';

const Part4Audience = ({
                         index,
                         totalIndex,
                         values,
                         errors,
                         optionsAudienceScope,
                         optionsYearLevels,
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
            <FieldCheckboxList name="yearLevels"
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
            <FieldNumberInput name="cohortSize"
                              min={1}
                              max={3000}
                              className={errors.cohortSize && 'is-invalid'}
                              error={errors.cohortSize}
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
