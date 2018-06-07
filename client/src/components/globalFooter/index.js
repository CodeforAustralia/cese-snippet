import React from 'react';
import cx from 'classnames';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import DetLogo from './doe-black-logo.png';

import style from './style.scss';


const GlobalFooter = ({ className = null }) => {
  return (
    <aside className={cx(className, style.footer)}>
      <Container>
        <Row>
          <Col size={{sm: 12, md: 4}}>
            <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
          </Col>
          <Col size={{sm: 6, md: 4}}>
            <ul className="list-unstyled">
              <li><a href="mailto:nsweducation.snippet@gmail.com">Contact</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://snippet1.typeform.com/to/zRI3Tz">Give Feedback</a></li>
              {window && window.localStorage && window.localStorage.debug && <li><Link to="/login">Login</Link></li>}
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
