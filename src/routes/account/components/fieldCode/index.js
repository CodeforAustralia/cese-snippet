import React from 'react';
import {
  Input,
  FormFeedback,
} from 'reactstrap';

import FieldSelect from 'components/fieldSelect';


const FieldCode = ({ options, disabled, name, value, onChange, onBlur, touched, error }) => {

  if (disabled) {
    return (
      <Input type="text" disabled={true} value={value} />
    )
  }

  if (options.length === 1) {
    return (
      <div>
        <Input type="text" disabled={true} value={options[0].label} />
        {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
      </div>
    )
  }

  return (
    <div>
      <FieldSelect name={name}
                   clearable={false}
                   disabled={disabled}
                   options={options}
                   value={value}
                   onChange={onChange}
                   onBlur={onBlur}
                   touched={touched}
                   invalid={errors} />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  );
};


export default FieldCode;
