import React from 'react';
import cx from 'classnames';
import style from './style.scss';

/**
 * Sticky Footer Layout
 *
 * example:
   <StickyContainer>
     <StickyBodyPanel>
      body
     </StickyBodyPanel>
     <StickyFooterPanel>
      footer
     </StickyFooterPanel>
   </StickyContainer>
 */

export const StickyContainer = ({ children }) => (
  <div className={style.wrapper}>
    {children}
  </div>
);
export const StickyBodyPanel = ({ className, children }) => (
  <div className={cx(style.body, className)}>
    {children}
  </div>
);

export const StickyFooterPanel = ({ children }) => (
  <div className={style.footer}>
    {children}
  </div>
);
