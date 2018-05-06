import React from 'react';
import {
  Label,
  Input,
} from 'reactstrap';
import {
  FieldArray,
} from 'formik';

const FieldRadioBtnList = ({ options, name, value }) => {
  return (
    <div>
      <FieldArray name={name}
                  render={({form}) => (
                    options.map((o, idx) => {
                      const oName = `${name}.${o.value}`;
                      const isChecked = value === o.value;
                      return (
                        <div key={idx} className="custom-control custom-radio">
                          <Input type="radio"
                                 id={oName}
                                 name={name}
                                 checked={isChecked}
                                 onChange={() => form.setFieldValue(name, o.value)}
                                 onBlur={form.setFieldTouched}
                                 className={`
                                  custom-control-input
                                  ${form.errors[name] && 'is-invalid'}
                                 `}
                          />
                          <Label htmlFor={oName} className='custom-control-label'>
                            {o.label}
                          </Label>
                        </div>
                      )
                    })
                  )}
      />
    </div>
  );
};

export default FieldRadioBtnList;
