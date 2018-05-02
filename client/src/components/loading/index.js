import React from 'react';
import style from './style.scss';

export const BoxLoading = () => (
  <div className={style.container}>
    <div className={style.el}>
      <div className={style.boxSpinner} />
    </div>
  </div>
);

export const CircleLoading = () => (
  <div className={style.container}>
    <div className={style.el}>
      <div className={style.circleSpinner}>
        <div className={style.circleSpinnerBounce1} />
        <div className={style.circleSpinnerBounce2} />
        <div className={style.circleSpinnerBounce3} />
      </div>
    </div>
  </div>
);

export default BoxLoading;


