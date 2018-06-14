import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part10DeliveredBy from './index';

const formMock = {
  values: {},
  errors: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

const optionsMock = [
  { "label": "School Staff", "value": "School Staff" },
  { "label": "External Party", "value": "External Party" },
];

storiesOf('Program Form Part 10 - Delivered By', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part10DeliveredBy index="10" totalIndex="10"
                         values={formMock.values}
                         errors={formMock.errors}
                         optionsDeliveredByType={optionsMock}
                         setFieldValue={formMock.setFieldValue}
                         setFieldTouched={formMock.setFieldTouched}
      />
    )
  })

  .add('should render "externalParty" if "External Party" is selected', () => {
    return (
      <Part10DeliveredBy index="10" totalIndex="10"
                         values={{
                           deliveredByType: 'External Party',
                         }}
                         errors={formMock.errors}
                         optionsDeliveredByType={optionsMock}
                         setFieldValue={formMock.setFieldValue}
                         setFieldTouched={formMock.setFieldTouched}
      />
    )
  })

;
