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

export const PageLoading = ({ blocking = true }) => (
  <div className={cx(style.pageLoadingContainer, blocking ? style.isBlocking : '')}>
    <div className={style.pageLoadingEl}>
      <div className={style.pageCircleSpinner}>
        <div className={style.circleSpinnerBounce1} />
        <div className={style.circleSpinnerBounce2} />
        <div className={style.circleSpinnerBounce3} />
      </div>
    </div>
  </div>
);

export const ComponentLoading = ({ small = true, innerPage = false }) => {
  if (innerPage) {
    small = false;
  }
  return (
    <div className={style.componentLoadingContainer}>
      <div className={style.componentLoadingEl}>
        <div className={cx(
          style.componentCircleSpinner,
          small ? style.isSmall : '',
          innerPage ? style.innerPage : '',
        )}>
          <div className={style.circleSpinnerBounce1} />
          <div className={style.circleSpinnerBounce2} />
          <div className={style.circleSpinnerBounce3} />
        </div>
      </div>
    </div>
  );
};

export default BoxLoading;


