import React from 'react';
import {
  Alert,
} from 'reactstrap';
import { HashLink } from 'react-router-hash-link';

import { capitalizeFirstLetter } from 'helpers/textFormats';
import style from './style.scss';


const ErrorSummary = ({ errors }) => {
  return (
    <Alert color="danger" className={style.errorSummary}>
      <p>Please review the following errors:</p>
      <ul className="mb-0 list-unstyled">
        {Object.keys(errors).map((key, idx) => {
          const value = errors[key];
          return (
            <li key={idx}><span className={style.propKey}>{capitalizeFirstLetter(key)}:</span><HashLink to="/account/create-program#key">{value}</HashLink></li>
          )
        })}
      </ul>
    </Alert>
  )
};

export default ErrorSummary;
