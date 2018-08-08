import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part11Additional from './index';

const formMock = {
  values: {},
  errors: {},
  touched: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 11 - Additional', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part11Additional index="optional"
                        setFieldValue={formMock.setFieldValue}
                        setFieldTouched={formMock.setFieldTouched}
                        values={formMock.values}
                        errors={formMock.errors}
                        touched={formMock.touched}
                        optionsSefDomain={[
                          { "value": "Learning", "label": "Learning" },
                          { "value": "Teaching", "label": "Teaching" },
                          { "value": "Leading", "label": "Leading" }
                        ]}
                        optionsSefElements={[
                          { "value": "Option A", "label": "Option A" },
                          { "value": "Option B", "label": "Option B" },
                          { "value": "Option C", "label": "Option C" }
                        ]}
      />
    )
  })

;
