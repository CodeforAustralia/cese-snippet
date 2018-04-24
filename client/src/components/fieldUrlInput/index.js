import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldUrlInput = ({ name, disabled = false }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="url" disabled={disabled} {...field} />
           )}
    />
  )
};

FieldUrlInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FieldUrlInput;
