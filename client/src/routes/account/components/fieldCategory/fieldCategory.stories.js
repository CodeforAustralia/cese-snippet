import React from 'react';
import { storiesOf } from '@storybook/react';

import Field from './index';

storiesOf('Field - category', module)
  .add('default', () => {
    const values = {};
    const errors = {};
    const setFieldValue = () => {};
    const setFieldTouched = () => {};
    return (
      <Field name="category"
        value={values.category}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.category}
        touched={touched.category}
      />
    )
  })
;
