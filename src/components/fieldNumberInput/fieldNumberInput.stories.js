import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldNumberInput from './index';


storiesOf('Field number input', module)

  .add('should enter input on keystroke', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values }) => {
          return (
            <Form>
              <FieldNumberInput name="prop1" />
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
        initialValues={{prop1: 213}}
        onSubmit={() => action('Submitted')}
        render={({ values }) => {
          return (
            <Form>
              <FieldNumberInput name="prop1" />
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
        render={({ values, setFieldValue }) => {
          return (
            <div>
              <button type="button" onClick={() => setFieldValue('prop1', 213)}>Set prop1 to 213</button>
              <Form>
                <FieldNumberInput name="prop1" />
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
