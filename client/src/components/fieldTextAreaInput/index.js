import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextareaInput = ({ name, rows = 3, disabled = false }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="textarea" disabled={disabled} rows={rows} {...field} />
           )}
    />
  )
};

FieldTextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FieldTextareaInput;
