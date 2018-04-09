import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import Layout from './layout';
import style from './style.scss';


const HomePage = () => (
  <div className={style.home}>
    <Layout>
      <div className={style.containerWrap}>
        <Container>
          <Row>
            <Col sm={{size: 6, offset: 3}}>
              <h2>Programs happening in schools now</h2>
              <p>For school staff to view or publish news about program applications in NSW schools.</p>
            </Col>
          </Row>

          <Row>
            <Col sm={{size: 6, offset: 3}}>
              <div>
                <Link to="/login">Start Demo</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  </div>
);

export default HomePage;
