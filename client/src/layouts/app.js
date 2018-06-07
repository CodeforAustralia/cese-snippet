import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import { GlobalHeaderAuth } from 'components/globalHeader';
// import GiveFeedback from 'components/giveFeedback';
import Footer from 'components/addFeedbackFooter';

import style from './home.scss';


const Layout = ({ containerClassName, children }) => (

  <div className={cx(containerClassName, style.layout)}>

    <NoticeRibbon />

    <GlobalHeaderAuth />

    {children}

    <Footer />

    {/*<GiveFeedback />*/}

  </div>
);

export default Layout;