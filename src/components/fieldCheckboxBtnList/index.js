import React from 'react';
import PropTypes from 'prop-types';
import {
  FieldArray,
} from 'formik';
import cx from 'classnames';
import {
  Button,
  FormFeedback,
} from 'reactstrap';

import style from './style.scss';


// value = {"stamp":["Helpful","Thank you"]}

const FieldCheckboxBtnList = ({
                                name,
                                value,
                                options,
                                error = null,
                                inline = false,
                                spaced = false,
}) => {
  return (
    <div>
      <FieldArray name={name} render={(arrayHelpers) => (
        <div className={cx(
          inline ? 'btn-group' : 'btn-group-vertical',
          inline ?
            (spaced ? style.inlineSpaced : null) :
            (spaced ? style.verticalSpaced : null)
        )} role="group">
          {options.map((o, idx) => {
            const isChecked = typeof value !== 'undefined' ? value.includes(o.value) : false;
            return (
              <Button key={idx}
                      type="button"
                      color={isChecked ? 'dark' : 'light'}
                      className={error && 'is-invalid'}
                      onClick={() => {
                        if (isChecked) {
                          const idx = value.indexOf(o.value);
                          arrayHelpers.remove(idx);
                        } else {
                          arrayHelpers.push(o.value);
                        }
                      }}
              >{o.value}</Button>
            )
          })}
        </div>
      )} />
      {error && <FormFeedback style={{display:'block'}}>{error}</FormFeedback>}
    </div>
  );
};

FieldCheckboxBtnList.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default FieldCheckboxBtnList;
