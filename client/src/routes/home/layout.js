import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import GlobalHeader from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';
import style from './layout.scss';

const Layout = ({containerClassName, children, homeHeader = false }) => (

  <div className={cx(containerClassName, style.layout)}>

    <NoticeRibbon />

    <GlobalHeader />

    {children}

    <GlobalFooter />

  </div>
);

export default Layout;
