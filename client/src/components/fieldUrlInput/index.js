import React from 'react';
import {
  Input,
  FormFeedback,
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldUrlInput = ({
                         name,
                         disabled = false,
                         hidden = false,
                         error = null,
}) => {
  return (
    <div>
      <Field name={name}
             render={({ field }) => (
               <Input type="url"
                      id={name}
                      disabled={disabled}
                      hidden={hidden}
                      className={error && 'is-invalid'}
                      {...field}
               />
             )}
      />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

FieldUrlInput.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldUrlInput;
