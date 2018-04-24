import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldUrlInput = ({ name }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="url" {...field} />
           )}
    />
  )
};

FieldUrlInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldUrlInput;
