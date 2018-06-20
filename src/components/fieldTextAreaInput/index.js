import React from 'react';
import {
  Input,
  FormFeedback,
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldTextareaInput = ({
                              name,
                              rows = 3,
                              disabled = false,
                              hidden = false,
                              error = null,
}) => {
  return (
    <div>
      <Field name={name}
             render={({ field }) => (
               <Input type="textarea"
                      id={name}
                      disabled={disabled}
                      hidden={hidden}
                      rows={rows}
                      className={error && 'is-invalid'}
                      {...field}
               />
             )}
      />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

FieldTextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldTextareaInput;
