import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { Link as RRLink } from 'react-router-dom';

const WizardLayout = ({
                        prevTo = null, isActivePrev = true,
                        nextTo = null, isActiveNext = true,
                        children,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
        <Row>
          <Col>
            {prevTo && <Button tag={RRLink}
                               to={prevTo}
                               color={isActivePrev ? 'primary' : 'secondary'}
                               disabled={!isActivePrev}>{`<`}</Button>}
          </Col>
          <Col>
            {nextTo && <Button tag={RRLink}
                               className="float-right"
                               to={nextTo}
                               color={isActiveNext ? 'primary' : 'secondary'}
                               disabled={!isActiveNext}>{`>`}</Button>}
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default WizardLayout;
