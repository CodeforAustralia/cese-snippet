import React from 'react';
import {
  Label,
  Input,
} from 'reactstrap';
import {
  FieldArray,
  Field
} from 'formik';

const FieldRadioBtnList = ({ options, name, value, vertical = null }) => {
  return (
    <FieldArray name="myfield2" render={({form}) => (
      options.map((o, idx) => {
        const oName = `${name}.${o.value}`;
        const isChecked = value === o.value;
        return (
          <div key={idx}>
            <Label htmlFor={oName}>
              <Input type="radio" // could be Field
                     id={oName}
                     name={name}
                     checked={isChecked}
                     onChange={() => form.setFieldValue(name, o.value)}
              />
              {o.label}
            </Label>
          </div>
        )
      })
    )} />
  );
};

export default FieldRadioBtnList;
