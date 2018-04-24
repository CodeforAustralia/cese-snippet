import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextInput = ({ name }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="text" {...field} />
           )}
    />
  )
};

FieldTextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldTextInput;
