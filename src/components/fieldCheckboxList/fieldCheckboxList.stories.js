import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldCheckboxList from './index';


const options = [
  { value: '1001', label: 'One' },
  { value: '1002', label: 'Two' },
  { value: '1003', label: 'Three' },
];

storiesOf('Field checkbox list', module)

  .add('should select many values', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values}) => {
          return (
            <Form>
              <FieldCheckboxList name="prop1"
                                 value={values.prop1}
                                 options={options}
              />

              <code>
                Form state: {JSON.stringify(values)}
              </code>
            </Form>
          )
        }} />
    )
  })

  .add('should prefill a single value', () => {
    return (
      <Formik
        initialValues={{'prop1': ["1002"]}}
        onSubmit={() => action('Submitted')}
        render={({values}) => {
          return (
            <Form>
              <FieldCheckboxList name="prop1"
                                 value={values.prop1}
                                 options={options}
              />

              <code>
                Form state: {JSON.stringify(values)}
              </code>
            </Form>
          )
        }} />
    )
  })


  .add('should update value imperatively', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue}) => {
          return (
            <div>
              <button type="button" onClick={() => setFieldValue('prop1', ["1002"])}>Set prop1 to "1002"</button>
              <Form>
                <FieldCheckboxList name="prop1"
                                   value={values.prop1}
                                   options={options}
                />

                <code>
                  Form state: {JSON.stringify(values)}
                </code>
              </Form>
            </div>
          )
        }} />
    )
  })



  .add('should render invalid', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched, errors}) => {
          errors.prop1 = 'Required';
          return (
            <div>
              <Form>
                <FieldCheckboxList name="prop1"
                                   value={values.prop1}
                                   options={options}
                                   error={errors.prop1}
                />

                <code>
                  Form state: {JSON.stringify(values)}
                </code>
                <button type="submit">Submit</button>
              </Form>
            </div>
          )
        }} />
    )
  })



  .add('should invalidate on submit without value checked', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        validate={(values, props) => {
          const errors = {};

          if (typeof values.prop1 === 'undefined') {
            errors.prop1 = 'Required';
          }
          if (values.prop1 && !values.prop1.length) {
            errors.prop1 = 'Required';
          }

          console.log(errors)


          return errors;
        }}
        render={({values, setFieldValue, setFieldTouched, errors}) => {
          return (
            <div>
              <Form>
                <FieldCheckboxList name="prop1"
                                   value={values.prop1}
                                   options={options}
                                   error={errors.prop1}
                />

                <code>
                  Form state: {JSON.stringify(values)}
                </code>
                <button type="submit">Submit</button>
              </Form>
            </div>
          )
        }} />
    )
  })

;
