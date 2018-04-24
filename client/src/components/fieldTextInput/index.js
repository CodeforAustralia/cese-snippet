import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextInput = ({ name, disabled = false, hidden = false }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="text" disabled={disabled} hidden={hidden} {...field} />
           )}
    />
  )
};

FieldTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldTextInput;
