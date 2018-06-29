import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldRadioButtonList from './index';


const options = [
  { value: '1001', label: 'One' },
  { value: '1002', label: 'Two' },
  { value: '1003', label: 'Three' },
];

storiesOf('Field radio button list', module)

  .add('should render correctly - inline', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldRadioButtonList name="prop1"
                                    value={values.prop1}
                                    options={options}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    inline={true}
              />

              <code>
                Form state: {JSON.stringify(values)}
              </code>
            </Form>
          )
        }} />
    )
  })

  .add('should render correctly - vertical', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldRadioButtonList name="prop1"
                                    value={values.prop1}
                                    options={options}
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

  .add('should select a single value', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldRadioButtonList name="prop1"
                                    value={values.prop1}
                                    options={options}
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

  .add('should prefill a single value', () => {
    return (
      <Formik
        initialValues={{'prop1':'1001'}}
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldRadioButtonList name="prop1"
                                    value={values.prop1}
                                    options={options}
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
                <FieldRadioButtonList name="prop1"
                                      value={values.prop1}
                                      options={options}
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
