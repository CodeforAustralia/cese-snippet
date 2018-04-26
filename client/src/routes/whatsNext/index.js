import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router';

import Layout from './../home/layout';
import style from './style.scss';


const WhatsNextPage = ({ history }) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{size: 10}}>
            <div className={style.whatsNextContainer}>

              {history.length > 0 ?
                <p><Button color="link" className="pl-0" onClick={() => history.goBack()}>{`< Back`}</Button></p> :
                null
              }

              <div className={style.headline}>
                <h1>What's next</h1>
                <p>We're working hard to bring more features to Snippet to help school staff share and discover programs
                  in action for NSW Public Schools.</p>
              </div>


              <h2 className="h5 mb-2">Here's a glimpse of whats' coming</h2>
              <ol className={style.whatsNextList}>

                <li><strong>We're building a way for you to discover programs outside of your school</strong> At the moment Snippet allows you to see programs and initiatives happening at your school, but we're building new parts of Snippet that will allow you to search and discover programs from all NSW Public Schools.</li>

                <li><strong>We're making it easy for you to upload information and resources</strong> We know you want to share your knowledge about programs with your peers, so we're building ways for you to upload worksheets, share insights and photographs of your programs in action</li>

                <li><strong>We're making it easy for you to use Snippet on your phone</strong> We know teachers are busy and on the go, so we're building a mobile experience that you can keep in your pocket and access Snippet from anywhere.</li>
              </ol>

              <br />

              <p>You can read more about the new Snippet in out <a href="https://www.yammer.com/det.nsw.edu.au/#/threads/inGroup?type=in_group&feedId=13755246&view=all" target="_blank">Yammer post</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default withRouter(WhatsNextPage);
