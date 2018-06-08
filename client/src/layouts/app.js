import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import { GlobalHeaderAuth } from 'components/globalHeader';
import GiveFeedback from 'components/giveFeedbackEmbed';
// import Footer from 'components/addFeedbackFooter';

import style from './home.scss';


const Layout = ({ containerClassName, children, pad = false }) => (

  <div className={cx(containerClassName, style.layout)}>

    <NoticeRibbon />

    <GlobalHeaderAuth />

    <div className={pad ? style.padChildren : ''}>
      {children}
    </div>

    {/*<Footer />*/}

    <GiveFeedback link={process.env.REACT_APP_TYPEFORM_APP} />

  </div>
);

export default Layout;
