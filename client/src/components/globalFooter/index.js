import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import DetLogo from './doe-black-logo.png';

import style from './style.scss';


const GlobalFooter = () => {
  return (
    <aside className={style.footer}>
      <Container>
        <Row>
          <Col size={{sm: 12, md: 4}}>
            <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
          </Col>
          <Col size={{sm: 6, md: 4}}>
            <ul className="list-unstyled">
              <li><a href="mailto:nsweducation.snippet@gmail.com">Contact</a></li>
            </ul>
          </Col>
          <Col size={{sm: 6, md: 4}}>
            <ul className="list-unstyled">
              <li><a href="https://education.nsw.gov.au/about-us/rights-and-accountability/information-access">Information access</a></li>
              <li><a href="https://education.nsw.gov.au/about-us/rights-and-accountability/privacy">Privacy</a></li>
              <li><a href="https://education.nsw.gov.au/about-us/rights-and-accountability/copyright">Copyright</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </aside>
  )
};

export default GlobalFooter;
