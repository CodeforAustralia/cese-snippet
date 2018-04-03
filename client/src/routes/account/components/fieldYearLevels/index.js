import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const FieldYearLevel = ({ options, defaultValue = [], setValues, name, ...fieldProps }) => {
  return (
    <div>
      {options.map((o, idx) => {
        const oName = `${name}.${o.value}`;
        const oChecked = defaultValue.includes(o.value);

        const handleOnChange = (e) => {
          let newState;
          if (oChecked) {
            newState = defaultValue.filter(v => v !== o.value);
            return setValues({[name]: newState});
          }
          newState = [...defaultValue, o.value];
          return setValues({[name]: newState});
        };

        return (
          <div key={idx} className="form-check form-check-inline">
            <Input className="form-check-input" type="checkbox" {...fieldProps} checked={oChecked} id={oName} value={o.value} onChange={handleOnChange} />
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
  // defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
};

export default FieldYearLevel;
