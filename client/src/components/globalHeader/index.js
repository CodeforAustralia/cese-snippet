import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import style from './style.scss';

const GlobalHeader = () => {
  return (
    <aside className={style.globalHeader}>
      <Container>
        <Row>
          <Col>
            <div className={style.globalHeaderTitle}>
              <Link to="/" title="Snippet | NSW Department of Education">Snippet</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </aside>
  )
};

export default GlobalHeader;
