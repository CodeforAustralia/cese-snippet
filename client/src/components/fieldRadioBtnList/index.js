import React from 'react';
import { Button } from 'reactstrap';
import { FieldArray } from 'formik';

const RadioBtnList = ({ options, name, value, onChange, onBlur }) => {
  return (
    <div>
      <FieldArray name={name} render={() => (
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((o, idx) => {
            const isChecked = o.value === value;
            return (
              <Button key={idx} color={isChecked ? 'primary' : 'secondary' }
                      onClick={() => {
                        onChange(name, o.value);
                      }}>
                {o.label}</Button>
            )
          })}
        </div>
      )} />
    </div>
  )
};

export default RadioBtnList;
