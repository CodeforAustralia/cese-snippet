import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldArray,
} from 'formik';

import style from './style.scss';


const options = [
  { value: 'Well done', label: 'Well done' },
  { value: 'Helpful', label: 'Helpful' },
  { value: 'Thank you', label: 'Thank you' },
  { value: 'Legend', label: 'Legend' },
];

// value = {"stamp":["Helpful","Thank you"]}

const FieldStampBtnList = ({ name, value, onChange }) => {
  return (
    <div className={style.stampBtnList}>
      <FieldArray name={name}
                  render={arrayHelpers => (
                    options.map((o, idx) => {
                      const oName = `${name}.${o.value}`;
                      const isChecked = typeof value !== 'undefined' ? value.includes(o.value) : false;
                      return (
                        <div key={idx}>
                          <label htmlFor={oName} className={style.label}>
                            <input type="checkbox"
                                   className={style.checkbox}
                                   value={o.value}
                                   id={oName}
                                   name={oName}
                                   onChange={() => {
                                     if (isChecked) {
                                       const idx = value.indexOf(o.value);
                                       arrayHelpers.remove(idx);
                                     } else {
                                       arrayHelpers.push(o.value);
                                     }
                                   }}
                            />
                            {o.label}
                          </label>
                        </div>
                      )
                    }
                  ))}
      />
    </div>
  )
};

FieldStampBtnList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FieldStampBtnList;
