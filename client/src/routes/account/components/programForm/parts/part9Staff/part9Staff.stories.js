import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part9Staff from './index';

const formMock = {
  values: {},
  errors: {},
  touched: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 9 - Staff', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part9Staff index="9" totalIndex="10"
                  values={formMock.values}
                  errors={formMock.errors}
                  touched={formMock.touched}
                  setFieldValue={formMock.setFieldValue}
                  setFieldTouched={formMock.setFieldTouched}
                  optionsStaff={[
                    {
                      "value": "37171",
                      "label": "Malorie.Mahn@test.nsw.edu.au"
                    },
                    {
                      "value": "37172",
                      "label": "Kenda.Kist@test.nsw.edu.au" 
                    },
                  ]}
      />
    )
  })

;
