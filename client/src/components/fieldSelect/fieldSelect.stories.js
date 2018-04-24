import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Formik,
  Form,
} from 'formik';

import FieldSelect from './index';


const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
];

storiesOf('Field select', module)

  .add('should select a single value', () => {
    return (
      <Formik
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldSelect name="prop1"
                           options={options}
                           value={values.prop1}
                           onChange={setFieldValue}
                           onBlur={setFieldTouched}
              />
              <code>
                Form state: {JSON.stringify(values)}
              </code>
            </Form>
          )
        }} />
    )
  })

  // .add('should preload data if provided', () => {})
  //
  // .add('should update value imperatively', () => {})
  //

  // .add('default', () => {
  //   const values = {};
  //   const errors = {};
  //   const touched = {};
  //   const setFieldValue = () => {};
  //   const setFieldTouched = () => {};
  //   return (
  //     <FieldSelect
  //       name="category"
  //       value={values.category}
  //       onChange={setFieldValue}
  //       onBlur={setFieldTouched}
  //       error={errors.category}
  //       touched={touched.category}
  //     />
  //   )
  // })
;
