import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldCheckboxList from 'components/fieldCheckboxList';
import IndexedPartLayout from './../../indexedPartLayout';
import {
  getIsDeliveredByExternal
} from 'store/programs/formHelpers';

const Part10DeliveredBy = ({
  index,
  totalIndex,
  values,
  errors,
  setFieldValue,
  setFieldTouched,
  optionsDeliveredByType,
}) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label>Program is delivered by</Label>
            <FieldCheckboxList name="deliveredByType"
                            value={values.deliveredByType}
                            error={errors.deliveredByType}
                            options={optionsDeliveredByType}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            inline={true}
            />
            <FormText color="muted">
              Is the program run by school staff or another provider?
            </FormText>
          </Col>
        </FormGroup>

        {getIsDeliveredByExternal(values.deliveredByType) &&
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="externalParty">Who is the External Party?</Label>
            <FieldTextInput name="externalParty" />
          </Col>
        </FormGroup>
        }
      </div>
    </IndexedPartLayout>
  )
};

export default Part10DeliveredBy;
