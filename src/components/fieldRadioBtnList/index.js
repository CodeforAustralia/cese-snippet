import React from 'react';
import {
  Button,
  FormFeedback,
} from 'reactstrap';
import cx from 'classnames';
import { FieldArray } from 'formik';

import style from './style.scss';


const FieldRadioBtnList = ({
                             options,
                             name,
                             value,
                             onChange,
                             error = null,
                             inline = false,
                             spaced = false,
                             columns = false,
}) => {
  return (
    <div>
      <FieldArray name={name} render={() => (
        <div className={cx(
          inline ? 'btn-group' : 'btn-group-vertical',
          inline ?
            (spaced ? style.inlineSpaced : null) :
            (spaced ? style.verticalSpaced : null),
          columns ? style.columns : null,
        )} role="group">
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
