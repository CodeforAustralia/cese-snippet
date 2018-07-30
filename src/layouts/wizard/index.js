import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

import { GlobalHeader } from 'components/globalHeader';
import style from './style.scss';


const WizardLayout = ({
                        prevTo = null, activatePrev = true,
                        nextTo = null, activateNext = true, nextText = `Next >`,
                        children,
}) => {
  return (
      <div className={style.layout}>

        <GlobalHeader />

        <main className={style.main}>
          <Container>
            {children}
          </Container>
        </main>

        <footer className={style.footer}>
          <Container>
            <Row>
              <Col>
                {prevTo && <Button tag={RRLink}
                                   size="sm"
                                   to={prevTo}
                                   color="light"
                                   disabled={!activatePrev}>{`< Back`}</Button>}
              </Col>
              <Col>
                {nextTo && <Button tag={RRLink}
                                   size="lg"
                                   className="float-right"
                                   to={nextTo}
                                   color={activateNext ? 'pink' : 'secondary'}
                                   disabled={!activateNext}>{nextText}</Button>}
              </Col>
            </Row>
          </Container>

        </footer>
      </div>
  )
};

export default WizardLayout;
