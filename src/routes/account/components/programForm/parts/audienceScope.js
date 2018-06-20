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
import FieldRadioList from 'components/fieldRadioList';
import FieldCheckboxList from 'components/fieldCheckboxList';


const PartAudienceScope = ({ values, errors, }) => {
  return (
    <div>

      <FieldRadioList name="audienceScope"
                      value={values.audienceScope}
                      options={this.optionsLevel1Categories}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      error={errors.category}
      />




      name=




      <FormGroup row>
        <Col md={8}>
          <Label>For Year Levels</Label>
          <FieldCheckboxList name="yearLevels"
                             value={values.yearLevels}
                             options={this.optionsYearLevels}
                             error={errors.yearLevels}
                             inline={true}
          />
          <SelectAllYears
            allYears={this.props.setFieldValue}
            yearLevs={this.optionsYearLevels}
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
  )
};

export default PartAudienceScope;
