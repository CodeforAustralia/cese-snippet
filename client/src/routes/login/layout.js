import React from 'react';

import style from './style.scss';


const Layout = ({children}) => (
  <div className={`container-fluid ${style.container}`}>
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-sm-9 col-md-6 col-lg-3">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
