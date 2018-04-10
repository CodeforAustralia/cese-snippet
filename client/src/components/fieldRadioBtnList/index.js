import React from 'react';
import { Button } from 'reactstrap';
import { FieldArray } from 'formik';

const RadioBtnList = ({ options, name, value }) => {
  return (
    <div>
      <FieldArray name={name} render={({form}) => (
        <div className="btn-group" role="group" aria-label="Basic example">
          {options.map((o, idx) => {
            const isChecked = o.label === value;
            return (
              <Button key={idx} color={isChecked ? 'primary' : 'secondary' } onClick={() => {
                form.setFieldValue(name, o.label);
              }}>{o.label}</Button>
            )
          })}
        </div>
      )} />
    </div>
  )
};

export default RadioBtnList;
