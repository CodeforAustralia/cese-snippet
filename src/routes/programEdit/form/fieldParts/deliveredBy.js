import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldCheckboxBtnList from 'components/fieldCheckboxBtnList';
import { getIsDeliveredByExternal } from 'store/cms/helpers';

const Part10DeliveredBy = ({
  values,
  errors,
  setFieldValue,
  setFieldTouched,
  optionsDeliveredByType,
}) => {
  return (
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label  className="mb-1">Program is delivered by</Label>
            <FormText color="muted" className="mt-0 mb-2">
              Is the program run by school staff or another provider?
            </FormText>
            <FieldCheckboxBtnList name="deliveredByType"
                            value={values.deliveredByType}
                            error={errors.deliveredByType}
                            options={optionsDeliveredByType}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            inline={true}
            />
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
  )
};

export default Part10DeliveredBy;
