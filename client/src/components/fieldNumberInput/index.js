import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldNumberInput = ({ name, min, max, disabled = false, hidden = false, className = null }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="number" id={name} disabled={disabled} hidden={hidden} min={min} max={max} className={className} {...field} />
           )}
    />
  )
};

FieldNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldNumberInput;
