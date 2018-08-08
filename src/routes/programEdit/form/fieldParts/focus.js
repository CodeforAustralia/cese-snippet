import React from 'react';
import {
  FormGroup,
  Label,
  Col,
} from 'reactstrap';
import FieldRadioBtnList from 'components/fieldRadioBtnList';
import FieldSelect from 'components/fieldSelect';


const getSubCategories = (options, category) => {
  if (!category) {
    return [];
  }
  const selectedCategory = options.find(o => o.value === category);
  return selectedCategory.categories || [];
};

const Focus = ({
                      values,
                      errors,
                      touched,
                      setFieldValue,
                      setFieldTouched,
                      optionsCategories,
                    }) => {

  // todo - clear subCategory if category changes

  return (
      <div>
        <FormGroup row>
          <Col md={8}>
            <Label htmlFor="category">Main Focus</Label>
            <FieldRadioBtnList name="category"
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
                         options={getSubCategories(optionsCategories, values.category)}
                         disabled={typeof values.category === 'undefined'}
                         value={values.subCategory}
                         onChange={setFieldValue}
                         onBlur={setFieldTouched}
                         placeholder={typeof values.category === 'undefined' ? 'Select a Main Focus first' : 'Select …'}
                         touched={touched.subCategory}
                         error={errors.subCategory}
            />
          </Col>
        </FormGroup>
      </div>
  )
};

export default Focus;
