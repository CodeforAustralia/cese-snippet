import React from 'react';
import {
  Button,
  FormFeedback,
} from 'reactstrap';
import { FieldArray } from 'formik';

const FieldRadioBtnList = ({
                             options,
                             name,
                             value,
                             onChange,
                             vertical = null,
                             error = null,
}) => {
  return (
    <div>
      <FieldArray name={name} render={() => (
        <div className={vertical ? 'btn-group-vertical' : 'btn-group'} role="group">
          {options.map((o, idx) => {
            const isChecked = o.value === value;
            return (
              <Button key={idx} color={isChecked ? 'secondary' : 'light' }
                      className={error && 'is-invalid'}
                      onClick={() => {
                        onChange(name, o.value);
                      }}>
                {o.label}</Button>
            )
          })}
        </div>
      )} />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

export default FieldRadioBtnList;
