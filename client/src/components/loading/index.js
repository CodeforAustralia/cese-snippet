import React from 'react';
import style from './style.scss';

const Loading = () => (
  <div className={style.container}>
    <div className={style.el}>
      <div className={style.spinner} />
    </div>
  </div>
);

export default Loading;
