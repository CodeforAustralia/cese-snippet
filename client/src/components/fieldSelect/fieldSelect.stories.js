import React from 'react';
import { storiesOf } from '@storybook/react';

import FieldSelect from './index';

storiesOf('Field - category', module)
  .add('default', () => {
    const values = {};
    const errors = {};
    const touched = {};
    const setFieldValue = () => {};
    const setFieldTouched = () => {};
    return (
      <FieldSelect
        name="category"
        value={values.category}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.category}
        touched={touched.category}
      />
    )
  })
;
