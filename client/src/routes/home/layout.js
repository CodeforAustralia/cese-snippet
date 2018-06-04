import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import GlobalHeader from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';
import GiveFeedback from 'components/giveFeedback';

import style from './layout.scss';


const Layout = ({containerClassName, children, homeHeader = false }) => (

  <div className={cx(containerClassName, style.layout)}>

    <NoticeRibbon />

    <GlobalHeader />

    {children}

    <GlobalFooter />

    <GiveFeedback />

  </div>
);

export default Layout;
