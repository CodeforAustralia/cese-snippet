import React from 'react';
import cx from 'classnames';
import { Container } from 'reactstrap';

import { GlobalHeaderAuth } from 'components/globalHeader';
import style from './home/style.scss';
import GiveFeedbackEmbedModal from "components/giveFeedbackEmbedModal";


const Layout = ({ containerClassName, children, pad = false }) => (

  <div className={cx(containerClassName, style.layout)}>

    <GlobalHeaderAuth />

    <div className={pad ? style.padChildren : ''}>
      <Container className={style.appLayoutContainer}>
        {children}
      </Container>
    </div>

    <div className={style.positionFeedback}>
      <GiveFeedbackEmbedModal link={process.env.REACT_APP_TYPEFORM_APP} />
    </div>

  </div>
);

export default Layout;
