import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextareaInput = ({ name }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="textarea" rows={3} {...field} />
           )}
    />
  )
};

FieldTextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldTextareaInput;
