import React from 'react';
import cx from 'classnames';

import NoticeRibbon from 'components/noticeRibbon';
import { GlobalHeader } from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';
import GiveFeedbackEmbedModal from 'components/giveFeedbackEmbedModal';

import style from './home.scss';


const Layout = ({ containerClassName, children, pad = false }) => {
  console.log(process.env)
  return (
    <div className={cx(containerClassName, style.layout)}>

      <div className={style.wrapper}>

        <NoticeRibbon />

        <GlobalHeader />

        <div className={pad ? style.padChildren : ''}>
          {children}
        </div>

      </div>

      <GlobalFooter className={style.footer} />

      <div className={style.positionFeedback}>
        <GiveFeedbackEmbedModal link={process.env.REACT_APP_TYPEFORM_MARKETING} />
      </div>

    </div>
  );
}

export default Layout;
