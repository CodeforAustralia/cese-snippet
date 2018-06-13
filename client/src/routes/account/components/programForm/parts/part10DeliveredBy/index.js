import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  FormText,
} from 'reactstrap';
import FieldTextInput from 'components/fieldTextInput';
import FieldRadioList from 'components/fieldRadioList';
import IndexedPartLayout from './../../indexedPartLayout';

const Part10DeliveredBy = ({
                             index,
                             totalIndex,
                             values,
                             errors,
                             optionsDeliveredByType,
                             setFieldValue,
                             setFieldTouched,
                           }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label>Provider</Label>
            <FieldRadioList options={optionsDeliveredByType}
                            name="deliveredByType"
                            value={values.deliveredByType}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.deliveredByType}
                            inline={true}
            />
            <FormText color="muted">
              Is the program run by school staff or another provider?
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="externalProvider">Who is the External Provider?</Label>
            <FieldTextInput name="externalProvider" />
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part10DeliveredBy;
