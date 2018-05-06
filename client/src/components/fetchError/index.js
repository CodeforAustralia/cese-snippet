import React from 'react';
import {
  Alert,
  Button,
} from 'reactstrap';

import style from './style.scss';


const FetchError = ({ message, name = '', onRetry = null }) => {
  return (
    <div>
      <Alert color="warning">
        <p>There was a problem retrieving data{name ? ` for "${name}"` : ''}.</p>

        <p className={style.codeMessage}><code className="mt-4 mb-4">{JSON.stringify(message)}.</code></p>

        <Button color="link" className="alert-link pl-0" onClick={onRetry}>Retry</Button>.
      </Alert>
      <p><small>You can also email us at cese@det.nsw.edu.au for support.</small></p>
    </div>
  )
};

export default FetchError;
