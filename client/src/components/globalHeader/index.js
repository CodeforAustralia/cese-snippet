import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import style from './style.scss';

const GlobalHeader = () => {
  return (
    <aside className={style.globalHeader}>
      <Container>
        <Row>
          <Col>
            <div className={style.globalHeaderTitle}>
              <a href="https://education.nsw.gov.au" title="NSW Department of Education">NSW Department of Education</a>
            </div>
          </Col>
        </Row>
      </Container>
    </aside>
  )
};

export default GlobalHeader;
