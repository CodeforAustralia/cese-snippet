import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import {
  StickyContainer,
  StickyBodyPanel,
  StickyFooterPanel,
} from 'components/stickyPageLayout';
import { GlobalHeader } from 'components/globalHeader';
import GlobalFooter from 'components/globalFooter';

import style from './style.scss';

const FakeLoginLayout = ({ children }) => {
  return (
    <StickyContainer>
      <StickyBodyPanel className={style.main}>
        <GlobalHeader />
        <Container>
          <Row>
            <Col lg={{size: 6, offset: 3}}>
              <div className={style.formContainer}>
                {children}
              </div>
            </Col>
          </Row>
        </Container>
      </StickyBodyPanel>
      <StickyFooterPanel>
        <GlobalFooter />
      </StickyFooterPanel>
    </StickyContainer>
  )
};

export default FakeLoginLayout;
