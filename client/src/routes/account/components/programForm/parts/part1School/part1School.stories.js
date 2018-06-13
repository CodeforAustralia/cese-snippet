import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part1School from './index';

const formMock = {
  values: {},
  errors: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 1 - School', module)

  .addDecorator(story => (
    <Formik>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part1School index="1" totalIndex="10"
                   values={formMock.values}
                   errors={formMock.errors}
      />
    )
  })

;
