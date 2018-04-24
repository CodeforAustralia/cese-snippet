import React from 'react';
import { Button } from 'reactstrap';
import { FieldArray } from 'formik';

const FieldRadioBtnList = ({ options, name, value, onChange, onBlur, vertical = null }) => {
  return (
    <div>
      <FieldArray name={name} render={() => (
        <div className={vertical ? 'btn-group-vertical' : 'btn-group'} role="group" aria-label="Basic example">
          {options.map((o, idx) => {
            const isChecked = o.value === value;
            return (
              <Button key={idx} color={isChecked ? 'secondary' : 'light' }
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

export default FieldRadioBtnList;
