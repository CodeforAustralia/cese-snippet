import React from 'react';
import {
  Input,
  FormFeedback,
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';


const FieldNumberInput = ({
                            name,
                            min,
                            max,
                            disabled = false,
                            hidden = false,
                            className = null,
                            error = null
}) => {
  return (
    <div>
      <Field name={name}
             render={({ field }) => {
               const { value, ...restField } = field;
               return (
                 <Input type="number"
                        id={name}
                        disabled={disabled}
                        hidden={hidden}
                        min={min}
                        max={max}
                        className={`${className} ${error && 'is-invalid'}`}
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

FieldNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
};

export default FieldNumberInput;
