import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldSelectTags from './index';


const options = [
  {
    "value": "37171",
    "label": "Malorie.Mahn@test.nsw.edu.au"
  },
  {
    "value": "37172",
    "label": "Kenda.Kist@test.nsw.edu.au"
  },
  {
    "value": "41181",
    "label": "Leontine.Leija@test.nsw.edu.au"
  },
  {
    "value": "41182",
    "label": "Aurelio.Aikins@test.nsw.edu.au"
  },
];

storiesOf('Field select - tags', module)

  .add('should be able to select multiple tags', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldSelectTags name="prop1"
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

  .add('should be able to add tags that don\'t exist', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldSelectTags name="prop1"
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

  .add('should be able to remove tags', () => {
    return (
      <Formik
        initialValues={{prop1: ['41181', '37172']}}
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <Form>
              <FieldSelectTags name="prop1"
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

  .add('should be able to implicitly load data', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <div>
              <button type="button" onClick={() => setFieldValue("prop1", ["37171","41181"])}>Set prop1 to "["37171","41181"]"</button>
              <Form>
                <FieldSelectTags name="prop1"
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

  .add('should be able to implicitly load data not in options', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({values, setFieldValue, setFieldTouched}) => {
          return (
            <div>
              <button type="button" onClick={() => setFieldValue("prop1", ["37171","41181","Not a ferrari"])}>Set prop1 to "["37171","41181","Not a ferrari"]"</button>
              <Form>
                <FieldSelectTags name="prop1"
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
