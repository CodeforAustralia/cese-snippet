import React from 'react';
import { Input } from 'reactstrap';

import FieldSelect from 'components/fieldSelect';


const FieldCode = ({ options, disabled, name, value, onChange, onBlur, touched, errors }) => {

  if (disabled) {
    return (
      <Input type="text" disabled={true} value={value} />
    )
  }

  if (options.length === 1) {
    return (
      <Input type="text" disabled={true} value={options[0].label} />
    )
  }

  return (
    <FieldSelect name={name}
                 clearable={false}
                 disabled={disabled}
                 options={options}
                 value={value}
                 onChange={onChange}
                 onBlur={onBlur}
                 touched={touched}
                 invalid={errors} />
  );
};


export default FieldCode;
