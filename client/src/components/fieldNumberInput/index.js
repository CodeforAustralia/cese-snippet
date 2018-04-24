import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldNumberInput = ({ name, min, max, disabled = false }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="number" disabled={disabled} min={min} max={max} {...field} />
           )}
    />
  )
};

FieldNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
};

export default FieldNumberInput;
