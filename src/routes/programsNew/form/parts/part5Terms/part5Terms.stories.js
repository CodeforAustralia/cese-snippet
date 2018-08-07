import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part5Terms from './index';

const formMock = {
  values: {},
  errors: {},
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
                    { value: 'T1', label: 'T1' },
                    { value: 'T2', label: 'T2' },
                    { value: 'T3', label: 'T3' },
                    { value: 'T4', label: 'T4' },
                  ]}
      />
    )
  })

;