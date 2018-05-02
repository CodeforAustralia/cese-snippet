import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router';

import Form from 'components/feedbackForm';
import style from './style.scss'


const FeedbackPage = ({ history }) => {
  return (
    <Container>
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <div className={style.feedbackContainer}>
            <div className="mb-2" >

              <Button color="link"
                      onClick={() => {
                        if (history.location.pathname && history.location.pathname !== '/feedback') {
                          return history.goBack();
                        }
                        return history.push('/');
                      }}
                      className="pl-0"
              >{`Back`}</Button>
            </div>

            <h1 className="mb-4">Leave feedback</h1>
            <h3 className="h5 pb-4">Please take a moment to tell us how your experience was today?</h3>

            <Form />

          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default withRouter(FeedbackPage);
