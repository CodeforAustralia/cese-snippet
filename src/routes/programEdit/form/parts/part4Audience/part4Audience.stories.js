import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part4Audience from './index';

const formMock = {
  values: {
    audienceScope: null,
  },
  errors: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 4 - Audience', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <Part4Audience index="4" totalIndex="10"
                     values={formMock.values}
                     errors={formMock.errors}
                     optionsAudienceScope={[
                       { value: 'Whole School', label: 'Whole School' },
                       { value: 'Whole Year Level', label: 'Whole Year Level' },
                       { value: 'Mandatory Selected Groups', label: 'Mandatory Selected Groups' },
                       { value: 'Voluntary Participation', label: 'Voluntary Participation' },
                     ]}
                     optionsYearLevels={[
                       { value: 'K', label: 'K' },
                       { value: '1', label: '1' },
                       { value: '2', label: '2' },
                       { value: '3', label: '3' },
                       { value: '4', label: '4' },
                       { value: '5', label: '5' },
                       { value: '6', label: '6' },
                     ]}
                     optionsCohortSize={[
                       { "value": "< 30", "label": "< 30" },
                       { "value": "30 - 100", "label": "30 - 100" },
                       { "value": "101 - 200", "label": "101 - 200" },
                       { "value": "201 - 500", "label": "201 - 500" },
                       { "value": "> 500", "label": "> 500" }
                     ]}
                     setFieldValue={formMock.setFieldValue}
      />
    )
  })

;
