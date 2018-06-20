import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardDeck,
} from "reactstrap";

import Layout from 'layouts/home';
import RegisterForm from './components/registerForm';
import CallToActionBanner from './components/callToActionBanner';
import HowToFeature from './components/howToFeature';

import style from './style.scss';
import ScrollToTopOnMount from 'components/scrollToTopOnMount';

import DetLogo from 'components/globalFooter/doe-black-logo.png';

const HomePage = () => (

  <Layout>

    <ScrollToTopOnMount />


    <div className={style.topLayoutBand}>
      <Container>
        <Row>

          <Col xs={{size: 12}} lg={{size: 7}}>
            <div className={style.topLayoutBandLhs}>
              <div className={style.topBandLogo}>
                <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
              </div>
              <h1 className={style.topBandTitle}>Snippet</h1>
              <p>Be one of the key schools in trialling and helping forge a better way in discovering and sharing <em>Snippets</em> of knowledge for public school programs and initiatives in NSW.</p>
            </div>
          </Col>

          <Col xs={{size: 12}} lg={{size: 5}}>
            <div className={style.topLayoutBandRhs}>
              <RegisterForm />
            </div>
          </Col>

        </Row>
      </Container>
    </div>


    <div className={style.alertBanner}>
      <Container>
        <p>Currently seeking pilot schools</p>
      </Container>
    </div>


    <div className={style.whyJoinBand}>
      <Container>

        <Row>
          <Col>
            <h3 className="text-center mb-4">Why join Snippet?</h3>


            <CardDeck>
              <Card className={style.whyJoinCard}>
                <CardBody>
                  <div className={style.whyJoinFakeIcon}><span /></div>
                  <CardTitle>Discover and learn from locally relevant initiatives</CardTitle>
                  <CardText>Find out what’s working and what doesn’t from other NSW public schools, and adapt to your own context. No one wants to reinvent the wheel!</CardText>
                </CardBody>
              </Card>

              <Card className={style.whyJoinCard}>
                <CardBody>
                  <div className={style.whyJoinFakeIcon}><span /></div>
                  <CardTitle>Keep up-to-date</CardTitle>
                  <CardText>Stay on top the latest and trending initiatives in NSW Public schools and in your own school.</CardText>
                </CardBody>
              </Card>

              <Card className={style.whyJoinCard}>
                <CardBody>
                  <div className={style.whyJoinFakeIcon}><span /></div>
                  <CardTitle>Share and collaborate with like-minded colleagues</CardTitle>
                  <CardText>You don’t have to do this alone! Share and appreciate each other’s expertise and experiences in designing, implementing and improving school initiatives.</CardText>
                </CardBody>
              </Card>

              <Card className={style.whyJoinCard}>
                <CardBody>
                  <div className={style.whyJoinFakeIcon}><span /></div>
                  <CardTitle>Update the Community</CardTitle>
                  <CardText>Help parents easily find what programs and initiatives your school offer in School Finder.</CardText>
                </CardBody>
              </Card>
            </CardDeck>


          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.ctaLayoutBand}>
      <Container>
        <Row className={style.ctaBanner}>
          <Col>
            <CallToActionBanner />
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.howToBand}>
      <Container>
        <Row>
          <Col>
            <HowToFeature />
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.ctaLayoutBand}>
      <Container>
        <Row className={style.ctaBanner}>
          <Col>
            <CallToActionBanner />
          </Col>
        </Row>
      </Container>
    </div>

  </Layout>
);

export default HomePage;
