import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldUrlInput = ({ name, disabled = false, hidden = false }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="url" id={name} disabled={disabled} hidden={hidden} {...field} />
           )}
    />
  )
};

FieldUrlInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldUrlInput;
