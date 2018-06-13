import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part5Terms from './index';

const formMock = {
  values: {},
  errors: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 5 - Terms', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part5Terms index="5" totalIndex="10"
                  values={formMock.values}
                  errors={formMock.errors}
                  optionsTerms={[
                    { value: '1', label: 'T1 - 2018' },
                    { value: '2', label: 'T2 - 2018' },
                    { value: '3', label: 'T3 - 2018' },
                    { value: '4', label: 'T4 - 2018' },
                  ]}
      />
    )
  })

;
