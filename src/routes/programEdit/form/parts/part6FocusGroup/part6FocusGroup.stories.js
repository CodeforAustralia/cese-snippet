import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Formik } from 'formik';

import Part6FocusGroup from './index';

const formMock = {
  values: {},
  errors: {},
  setFieldValue: (v) => action(`setFieldValue: ${v}`),
  setFieldTouched: (v) => action(`setFieldTouched: ${v}`),
};

storiesOf('Program Form Part 6 - Focus Group', module)

  .addDecorator(story => (
    <Formik onSubmit={() => action('submitted')}>{story()}</Formik>
  ))

  .add('should render correctly', () => {
    return (
      <div style={{width: 700, border:'1px solid red'}}>
        <Part6FocusGroup index="6" totalIndex="10"
                         values={formMock.values}
                         errors={formMock.errors}
                         optionsFocusGroup={[
                           { "label": "None", "value": "None" },
                           { "label": "Indigenous", "value": "Indigenous" },
                           { "label": "Linguistically Diverse", "value": "Linguistically Diverse" },
                           { "label": "Refugee", "value": "Refugee" },
                           { "label": "Gifted", "value": "Gifted" },
                           { "label": "Trauma", "value": "Trauma" },
                           { "label": "Learning Difficulties", "value": "Learning Difficulties" },
                           { "label": "Emotional Difficulties", "value": "Emotional Difficulties" },
                           { "label": "Other", "value": "Other" }
                         ]}
                         setFieldValue={formMock.setFieldValue}
                         setFieldTouched={formMock.setFieldTouched}
        />
      </div>
    )
  })

;
