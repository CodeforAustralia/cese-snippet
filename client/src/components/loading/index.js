import React from 'react';
import style from './style.scss';

const Loading = () => (
  <div className={style.container}>
    <p className={style.el}>
      <div className={style.spinner} />
    </p>
  </div>
);

export default Loading;
