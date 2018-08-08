import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldCheckboxBtnList from 'components/fieldCheckboxBtnList';
import FieldRadioBtnList from 'components/fieldRadioBtnList';

const Part4Audience = ({
                         values,
                         errors,
                         optionsAudienceScope,
                         optionsYearLevels,
                         optionsCohortSize,
                         setFieldValue,
}) => {
  return (
    <div>
      <FormGroup row>
        <Col md={8}>
          <Label for="audienceScope">Audience Scope</Label>
          <FieldRadioBtnList name="audienceScope"
                             value={values.audienceScope}
                             error={errors.audienceScope}
                             options={optionsAudienceScope}
                             onChange={setFieldValue}
          />
        </Col>
      </FormGroup>

      {values.audienceScope && values.audienceScope !== 'Whole School' &&
        <FormGroup row>
          <Col md={8}>
            <Label className="mb-1">Year Levels</Label>
            <FormText color="muted" className="mt-0 mb-2">
              Which year levels are participating in this program?
            </FormText>
            <FieldCheckboxBtnList name="yearLevels"
                               value={values.yearLevels}
                               options={optionsYearLevels}
                               error={errors.yearLevels}
                               inline={true}
            />
          </Col>
        </FormGroup>
      }

      {values.audienceScope && (values.audienceScope === 'Mandatory Selected Groups' || values.audienceScope === 'Voluntary Participation') &&
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="cohortSize" className="mb-1">Number of Participants</Label>
            <FormText color="muted" className="mt-0 mb-2">
              How many people participated in this program?
            </FormText>
            <FieldRadioBtnList name="cohortSize"
                               options={optionsCohortSize}
                               error={errors.cohortSize}
                               value={values.cohortSize}
                               onChange={setFieldValue}
                               inline={true}
                               spaced={true}
            />
          </Col>
        </FormGroup>
      }
    </div>
  )
};

export default Part4Audience;
