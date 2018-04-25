import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldStampBtnList from './index';


const options = [
  { value: 'Well done', label: 'Well done' },
  { value: 'Helpful', label: 'Helpful' },
  { value: 'Thank you', label: 'Thank you' },
  { value: 'Legend', label: 'Legend' },
];

storiesOf('Field checkbox button list', module)

  .add('should render correctly', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({ values }) => {
          return (
            <div>
              <Form>
                <FieldStampBtnList name="stamp"
                                   value={values.stamp}
                                   options={options}
                />
              </Form>
              <code>
                {JSON.stringify(values)}
              </code>
            </div>
          )
        }} />
    )
  })

;
