import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import {
  Input,
  Label,
  FormFeedback,
} from 'reactstrap';

import style from './style.scss';


const FieldCheckboxList = ({ options, name, value, error = null, inline = false }) => {
  return (
    <div>
      <FieldArray
        name={name}
        render={arrayHelpers => (
          options.map((o, idx) => {
            const oName = `${name}.${o.value}`;
            const isChecked = typeof value !== 'undefined' ? value.includes(o.value) : false;
            return (
              <div className={`custom-control custom-checkbox ${inline && style.isInline}`} key={idx}>
                <Input type="checkbox"
                       className={`custom-control-input ${error && 'is-invalid'}`}
                       id={oName}
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
                <Label className="custom-control-label" htmlFor={oName}>{o.label}</Label>
              </div>
            );
          })
        )}
      />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

FieldCheckboxList.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
};

export default FieldCheckboxList;

