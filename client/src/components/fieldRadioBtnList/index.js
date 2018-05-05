import React from 'react';
import { FieldArray } from 'formik';

const FieldRadioBtnList = ({ options, name, value, onChange, onBlur, vertical = null }) => {
  return (
    <div>
      <FieldArray name={name} render={() => (
        <div className={vertical ? 'btn-group-vertical' : 'btn-group'} role="group">
          {options.map((o, idx) => {
            const isChecked = o.value === value;
            return (
              <div key={idx} color={isChecked ? 'secondary' : 'light' }>
                <label >
                  <input
                    type="radio"
                    value={o.value}
                    checked={isChecked}
                    onChange={() => {
                      onChange(name, o.value);
                    }}
                  />
                  {o.label}
              </label>
              </div>
            )
          })}
        </div>
      )} />
    </div>
  )
};

export default FieldRadioBtnList;
