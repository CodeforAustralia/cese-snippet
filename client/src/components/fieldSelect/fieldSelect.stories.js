import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldSelect from './index';


const options = [
  { value: '1001', label: 'One' },
  { value: '1002', label: 'Two' },
  { value: '1003', label: 'Three' },
];

storiesOf('Field select', module)

  .add('should select a single value', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldSelect name="prop1"
                           options={options}
                           value={values.prop1}
                           onChange={setFieldValue}
                           onBlur={setFieldTouched}
                           clearable={false}
                           placeholder="Select..."
              />
              <code>
                Form state: {JSON.stringify(values)}
              </code>
            </Form>
          )
        }} />
    )
  })

  .add('single value should be clearable', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
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

  .add('should preload data if provided', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        initialValues={{prop1: '3'}}
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

  .add('should update value imperatively', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <div>
              <button type="button" onClick={() => setFieldValue('prop1', '1002')}>Set prop1 to "1002"</button>
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
            </div>
          )
        }} />
    )
  })

  .add('should update value imperatively - bulk', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched, setValues}) => {
          return (
            <div>
              <button type="button" onClick={() => setValues({prop1: '1002'})}>Set prop1 to "1002"</button>
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
            </div>
          )
        }} />
    )
  })
;
