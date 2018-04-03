import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const FieldYearLevel = ({ options, ...fieldProps }) => {

  const { name, disabled } = fieldProps;

  if (!options) { // todo
    return <p>DEBUG: No options</p>
  }

  return (
    <div>
      {options.map((o, idx) => {
        const oName = `${name}_${o.value}`;
        return (
          <div key={idx} className="form-check form-check-inline">
            <Input className="form-check-input" type="checkbox" id={oName} value={o.value} disabled={disabled} />
            <label className="form-check-label" htmlFor={oName}>{o.label}</label>
          </div>
        )
      })}
    </div>
  )

};

FieldYearLevel.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FieldYearLevel;
