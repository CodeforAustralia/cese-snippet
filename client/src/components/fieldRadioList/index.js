import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Input,
  FormFeedback,
} from 'reactstrap';
import {
  FieldArray,
} from 'formik';

import style from './style.scss';


const FieldRadioBtnList = ({
                             options,
                             name,
                             value,
                             error = null,
                             inline = false,
}) => {
  return (
    <div>
      <FieldArray
        name={name}
        render={({form}) => (
          options.map((o, idx) => {
            const oName = `${name}.${o.value}`;
            const isChecked = value === o.value;
            return (
              <div className={`custom-control custom-radio ${inline && style.isInline}`} key={idx}>
                <Input type="radio"
                       id={oName}
                       name={name}
                       checked={isChecked}
                       onChange={() => form.setFieldValue(name, o.value)}
                       onBlur={form.setFieldTouched}
                       className={`
                        custom-control-input
                        ${error && 'is-invalid'}
                       `}
                />
                <Label htmlFor={oName} className='custom-control-label'>{o.label}</Label>
              </div>
            )
          })
        )}
      />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  );
};

FieldRadioBtnList.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default FieldRadioBtnList;
