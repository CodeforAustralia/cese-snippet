import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import GlobalHeader from 'components/globalHeader';
import GiveFeedback from 'components/giveFeedback';

import style from './home.scss';


const Layout = ({ containerClassName, children }) => (

  <div className={cx(containerClassName, style.layout)}>

    <NoticeRibbon />

    <GlobalHeader />

    {children}

    <GiveFeedback />

  </div>
);

export default Layout;
