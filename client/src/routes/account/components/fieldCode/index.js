import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const FieldCode = ({ options, ...fieldProps }) => {

  if (!options.length) {
    return <p>Loading...</p>;
  }

  if (options.length === 1) {
    return (
      <Input type="text" {...fieldProps} disabled={true} value={options[0].label} />
    )
  }

  return (
    <Input type="select" {...fieldProps}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>{option.label}</option>
      ))}
    </Input>
  )
};

FieldCode.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,

  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FieldCode;
