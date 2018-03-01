import React from 'react';

import style from './style.scss';


const LoginLayout = ({children}) => (
  <div className={`container-fluid ${style.container}`}>
    <div className={`row ${style.centeredLayout}`}>
      <div className="col-sm-9 col-md-3">
        {children}
      </div>
    </div>
  </div>
);

export default LoginLayout;
