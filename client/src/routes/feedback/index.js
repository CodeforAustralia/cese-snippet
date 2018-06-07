import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router';

import Layout from 'layouts/home';
import Form from 'components/feedbackForm';


const FeedbackPage = ({ history }) => {

  const handleGoBack = () => {
    if (history.location.pathname && history.location.pathname !== '/feedback') {
      return history.goBack();
    }
    return history.push('/');
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={{size: 8, offset: 2}} md={{size: 6, offset: 3}}>
            <div>
              <div className="mb-2">
                <Button color="link" onClick={handleGoBack} className="pl-0" style={{fontSize:'.85rem'}}>{`< Back`}</Button>
              </div>

              <h1 className="h2 mb-4">Leave feedback</h1>

              <p>We'd love to know how your overall experience of Snippet was today.</p>
              <Form />

            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default withRouter(FeedbackPage);
