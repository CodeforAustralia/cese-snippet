import React from 'react';
import {
  Container,
  Row,
  Col,
  Badge,
} from 'reactstrap';

import style from './style.scss';

const NoticeRibbon = () => (
  <aside className={style.noticeRibbon}>
    <Container>
      <Row>
        <Col>
          <div className={style.noticeRibbonTab}>
            <p className={style.noticeRibbonTitle}>
              Welcome to<span className="uk-hidden-small">&nbsp;snippet.education.nsw.gov.au</span>&nbsp;
              <Badge className={style.badge} color="warning">COMING SOON</Badge>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </aside>
);

export default NoticeRibbon;
