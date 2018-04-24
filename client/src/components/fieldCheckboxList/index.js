import React from 'react';
import { FieldArray } from 'formik';

const FieldCheckboxList = ({ options, name, value }) => {
  return (
    <div>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          options.map((o, idx) => {
            const oName = `${name}.${o.value}`;
            const isChecked = typeof value !== 'undefined' ? value.includes(o.value) : false;
            return (
              <div key={idx} className="form-check form-check-inline">
                <label className="form-check-label" htmlFor={oName}>
                  <input
                    className="form-check-input"
                    id={oName}
                    type="checkbox"
                    value={o.value}
                    checked={isChecked}
                    onChange={() => {
                      if (isChecked) {
                        const idx = value.indexOf(o.value);
                        arrayHelpers.remove(idx);
                      } else {
                        arrayHelpers.push(o.value);
                      }
                    }}
                  />
                  {o.label}
                </label>
              </div>
            )
          })
        )}
      />
    </div>
  )
};

export default FieldCheckboxList;
