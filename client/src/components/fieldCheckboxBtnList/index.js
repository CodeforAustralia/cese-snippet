import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldArray,
} from 'formik';
import {
  Button,
  FormFeedback,
} from 'reactstrap';

import style from './style.scss';


// value = {"stamp":["Helpful","Thank you"]}

const FieldCheckboxBtnList = ({ name, value, options }) => {
  return (
    <div>
      <ul className={style.stampBtnList}>
        <FieldArray
          name={name}
          render={arrayHelpers => (
            options.map((o, idx) => {
              const isChecked = typeof value !== 'undefined' ? value.includes(o.value) : false;
              return (
                <li key={idx}>
                  <Button type="button"
                          color={isChecked ? 'dark' : 'light'}
                          className={`${style.button} ${error && 'is-invalid'}`}
                          onClick={() => {
                            if (isChecked) {
                              const idx = value.indexOf(o.value);
                              arrayHelpers.remove(idx);
                            } else {
                              arrayHelpers.push(o.value);
                            }
                          }}
                  >{o.value}</Button>
                </li>
              )
            }
          ))}
        />
      </ul>
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  )
};

FieldCheckboxBtnList.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default FieldCheckboxBtnList;
