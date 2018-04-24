import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldNumberInput = ({ name, min, max }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="number" min={min} max={max} {...field} />
           )}
    />
  )
};

FieldNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default FieldNumberInput;
