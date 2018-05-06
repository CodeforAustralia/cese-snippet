import React from 'react';
import {
  Input,
  FormFeedback,
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextInput = ({
                          name,
                          disabled = false,
                          hidden = false,
                          error = null,
                          placeholder = null,
                          autoFocus = false,
}) => {
  return (
    <div>
      <Field name={name}
             render={({ field }) => (
               <Input type="text"
                      id={name}
                      className={error && 'is-invalid'}
                      disabled={disabled}
                      hidden={hidden}
                      placeholder={placeholder}
                      autoFocus={autoFocus}
                      {...field}
               />
             )}
      />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

FieldTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldTextInput;
