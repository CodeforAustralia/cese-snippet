import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import get from 'lodash/get';
import FieldRadioList from 'components/fieldRadioList';
import FieldSelect from 'components/fieldSelect';
import IndexedPartLayout from './../../indexedPartLayout';

const Part3Focus = ({
                      index,
                      totalIndex,
                      values,
                      errors,
                      touched,
                      setFieldValue,
                      setFieldTouched,
                      optionsFocuses,
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="focus">Main Focus</Label>
            <FieldRadioList name="focus"
              value={values.focus}
              options={optionsFocuses}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.focus}
              />
        </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="domain">Domain Area</Label>
            <FieldSelect name="domain"
              clearable={false}
              options={get(optionsFocuses, '[values.domain].domain', null)}
              disabled={typeof values.domain === 'undefined'}
              value={values.domain}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              placeholder="First select a Main Focus"
              touched={touched.domain}
              error={errors.domain}
            />
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part3Focus;
