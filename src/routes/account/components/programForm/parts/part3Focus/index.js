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
                      optionsCategories,
                    }) => {
  return (
    <IndexedPartLayout index={index} totalIndex={totalIndex}>
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="category">Main Focus</Label>
            <FieldRadioList name="category"
              value={values.category}
              options={optionsCategories}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              error={errors.category}
              />
        </Col>
        </FormGroup>

        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="subCategory">Domain Area</Label>
            <FieldSelect name="subCategory"
              clearable={false}
              options={get(optionsCategories, '[values.category].categories', null)}
              disabled={typeof values.domain === 'undefined'}
              value={values.subCategory}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
              placeholder="First select a Main Focus"
              touched={touched.subCategory}
              error={errors.subCategory}
            />
          </Col>
        </FormGroup>
      </div>
    </IndexedPartLayout>
  )
};

export default Part3Focus;
