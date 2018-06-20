import React from 'react';
import cx from 'classnames';

import { GlobalHeaderAuth } from 'components/globalHeader';
import style from './home.scss';
import GiveFeedbackEmbedModal from "components/giveFeedbackEmbedModal";


const Layout = ({ containerClassName, children, pad = false }) => (

  <div className={cx(containerClassName, style.layout)}>

    <GlobalHeaderAuth />

    <div className={pad ? style.padChildren : ''}>
      {children}
    </div>

    <div className={style.positionFeedback}>
      <GiveFeedbackEmbedModal link={process.env.REACT_APP_TYPEFORM_APP} />
    </div>

  </div>
);

export default Layout;
