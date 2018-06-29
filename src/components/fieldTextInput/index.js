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
             render={({ field }) => {
               const { value, ...restField } = field;
               return (
                 <Input type="text"
                        id={name}
                        disabled={disabled}
                        hidden={hidden}
                        className={error && 'is-invalid'}
                        placeholder={placeholder}
                        autoFocus={autoFocus}
                        value={typeof value === 'undefined' ? '' : value}
                        {...restField}
                 />
               )
             }}
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
