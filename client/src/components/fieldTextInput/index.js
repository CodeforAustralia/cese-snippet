import React from 'react';
import {
  Input
} from 'reactstrap';
import {
  Field,
} from 'formik';
import PropTypes from 'prop-types';

import Bows from 'bows';

const log = Bows('Input');


const FieldTextInput = ({ name }) => {
  return (
    <Field name={name}
           render={({ field }) => (
             <Input type="text" {...field} />
           )}
    />
  )
};

export default FieldTextInput;
