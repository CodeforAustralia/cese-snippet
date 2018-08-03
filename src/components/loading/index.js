import React from 'react';
import cx from 'classnames';
import style from './style.scss';

export const BoxLoading = () => (
  <div className={style.container}>
    <div className={style.el}>
      <div className={style.boxSpinner} />
    </div>
  </div>
);

export const CircleLoading = ({ darkTheme = false }) => (
  <div className={style.container}>
    <div className={style.el}>
      <div className={cx(style.circleSpinner, darkTheme && style.isDarktheme)}>
        <div className={style.circleSpinnerBounce1} />
        <div className={style.circleSpinnerBounce2} />
        <div className={style.circleSpinnerBounce3} />
      </div>
    </div>
  </div>
);

export const PageLoading = () => (
  <div className={cx(style.pageLoadingContainer)}>
    <div className={style.pageLoadingEl}>
      <div className={cx(style.pageCircleSpinner)}>
        <div className={style.circleSpinnerBounce1} />
        <div className={style.circleSpinnerBounce2} />
        <div className={style.circleSpinnerBounce3} />
      </div>
    </div>
  </div>
);

export default BoxLoading;


