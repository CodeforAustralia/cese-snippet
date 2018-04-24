import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextareaInput = ({ name, rows = 3 }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="textarea" rows={rows} {...field} />
           )}
    />
  )
};

FieldTextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldTextareaInput;
