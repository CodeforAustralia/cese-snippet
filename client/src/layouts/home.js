import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import { GlobalHeader } from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';
import GiveFeedback from 'components/giveFeedback';

import style from './home.scss';


const Layout = ({ containerClassName, children, pad = false }) => (
  <div className={cx(containerClassName, style.layout)}>

    <div className={style.wrapper}>

      <NoticeRibbon />

      <GlobalHeader />

      <div className={pad ? style.padChildren : ''}>
        {children}
      </div>

    </div>

    <GlobalFooter className={style.footer} />

    <GiveFeedback link={process.env.REACT_APP_TYPEFORM_MARKETING} />

  </div>
);

export default Layout;
