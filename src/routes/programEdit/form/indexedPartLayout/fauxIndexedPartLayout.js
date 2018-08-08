import React from 'react';

import style from './style.scss';

const FauxIndexedPartLayout = ({ children }) => {
  return (
    <div className={style.field}>
      <div className={style.indexCol}>
      </div>
      <div className={style.fieldCol}>
        {children}
      </div>
    </div>
  )
};

export default FauxIndexedPartLayout;

