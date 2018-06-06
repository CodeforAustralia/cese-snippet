import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import GlobalHeader from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';
import GiveFeedback from 'components/giveFeedback';

import style from './home.scss';


const Layout = ({ containerClassName, children }) => (

  <div className={cx(containerClassName, style.layout)}>

    <div className={style.wrapper}>

      <NoticeRibbon />

      <GlobalHeader />

      {children}

    </div>

    <GlobalFooter className={style.footer} />

    <GiveFeedback />

  </div>
);

export default Layout;
