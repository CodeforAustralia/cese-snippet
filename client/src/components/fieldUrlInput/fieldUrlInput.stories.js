import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldUrlInput from './index';


storiesOf('Field url input', module)

  .add('should enter input on keystroke', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values }) => {
          return (
            <Form>
              <FieldUrlInput name="prop1" />
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
        initialValues={{prop1: 'https://google.com'}}
        onSubmit={() => action('Submitted')}
        render={({ values }) => {
          return (
            <Form>
              <FieldUrlInput name="prop1" />
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
              <button type="button" onClick={() => setFieldValue('prop1', 'https://google.com')}>Set prop1 to "https://google.com"</button>
              <Form>
                <FieldUrlInput name="prop1" />
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
