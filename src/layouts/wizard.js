import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import { GlobalHeader } from 'components/globalHeader';
import style from './wizard.scss';


const WizardLayout = ({
                        prevTo = null, isActivePrev = true,
                        nextTo = null, isActiveNext = true,
                        children,
}) => {
  return (
      <div className={style.layout}>

        <div className={style.headerContainer}>
          <GlobalHeader />
        </div>

        <Container className={style.mainContainer}>
          <main className={style.main}>
            {children}
          </main>
          <footer className={style.footer}>
            <Row>
              <Col>
                {prevTo && <Button tag={RRLink}
                                   size="lg"
                                   to={prevTo}
                                   color={isActivePrev ? 'primary' : 'secondary'}
                                   disabled={!isActivePrev}>{`<`}</Button>}
              </Col>
              <Col>
                {nextTo && <Button tag={RRLink}
                                   size="lg"
                                   className="float-right"
                                   to={nextTo}
                                   color={isActiveNext ? 'primary' : 'secondary'}
                                   disabled={!isActiveNext}>{`>`}</Button>}
              </Col>
            </Row>
          </footer>
        </Container>





{/*

        <Container>
          <Row className={style.main}>
            <Col>
              {children}
            </Col>
          </Row>

        </Container>
*/}
      </div>
  )
};

export default WizardLayout;
