import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Formik,
  Form,
} from 'formik';

import FieldStampBtnList from './index';


storiesOf('Field stamp button list', module)

  .add('should render correctly', () => {
    return (
      <Formik
        onSubmit={() => action('Submitted')}
        render={({ values }) => {
          return (
            <div>
              <Form>
                <FieldStampBtnList name="stamp"
                                   value={values.prop1}
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
