import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Button,
  Form,
  Label,
  Badge,
} from "reactstrap";
import cx from 'classnames';

import DetLogo from './doe-black-logo.png';
import style from './style.scss';


const HomePage = () => (
  <div className={style.home}>

    <div className={style.topLayoutBand}>
      <Navbar fixed color="transparent">
        <NavbarBrand to="/">Snippet<Badge color="light" pill className={style.alphaBadge}>ALPHA</Badge></NavbarBrand>
      </Navbar>

      <Container>
        <Row className={style.layoutHeadline}>
          <Col sm={{size: 7}}>
            <div className={style.headline}>
              <Badge color="warning" className="h4 ml-1" pill>COMING SOON</Badge>
              <h2>Programs happening in schools now</h2>
              <p className="h4">For school staff<supp className={style.conditionMark}>*</supp> to discover and publish practical knowledge, insights and resources about programs in NSW Public Schools.</p>
              <p className={style.headlineCta}><Button size="lg" color="primary" tag={RRLink} to="/login">Start Demo</Button></p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-muted"><small>You must have a Department of Education email to log in.</small></p>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.alertBanner}>
      <Container>
        <p>Staff from over 1000 schools have already signed up.</p>
      </Container>
    </div>


    <div className={style.howtoBand}>
      <Container>
        <Row className={cx(style.howtoBannerTop, 'mb-4')}>
          <Col sm={{size: 8, offset: 2}} className="text-center">
            <h3>Why Snippet?</h3>
            <p>You do a lot as a school staff, and often your amazing initiatives and insights from the frontline may go under the radar. Snippet hopes to give you a space to showcase, teach and learn from others beyond the school gate in the context of NSW Public schools.</p>
          </Col>
        </Row>

        <Row className={cx(style.howtoBannerTop, 'mb-2')}>
          <Col>
            <h3 className="text-center">It's as easy as..</h3>
          </Col>
        </Row>

        <Row className={style.howtoBannerLower}>
          <Col sm={{size: 4}} className={style.howtoCard}>
            <p className="h3">1.</p>
            <img src="http://via.placeholder.com/350x250" width="350" height="250" />
            <p>Log in with your DET login.</p>
          </Col>

          <Col sm={{size: 4}} className={style.howtoCard}>
            <p className="h3">2.</p>
            <img src="http://via.placeholder.com/350x250" width="350" height="250" />
            <p>View and keep up to date with programs by your school.</p>
          </Col>

          <Col sm={{size: 4}} className={style.howtoCard}>
            <p className="h3">3.</p>
            <img src="http://via.placeholder.com/350x250" width="350" height="250" />
            <p>Add a new program or update one that exists.</p>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.ctaLayoutBand}>
      <Container>
        <Row className={style.ctaBanner}>
          <Col>
            <Form inline>
              <Label className="mr-2">I'm interested and I'd like to see a demo of how might work!</Label>
              <Button size="lg" color="primary" tag={RRLink} to="/login" className="ml-2">Start Demo</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>



    <div className={style.lowerLayoutBand}>
      <Container>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            <h3>Discover and Learn</h3>
            <p>Know what other schools are doing well, and adapt to your own context. Save time and energy. No one wants to reinvent the wheel!</p>
          </Col>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
        </Row>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
          <Col sm={{size: 6}}>
            <h3>Amplify your Impact</h3>
            <p>Imagine your insight helping 100 more students. Sharing your knowledge may help other schools positively impact their students.</p>
          </Col>
        </Row>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            <h3>Get Recognised</h3>
            <p>Get some love from your peers. You can get "Shout Outs" for your good work. Of course, don't forget to give a Shout Out back to others to say thank you!</p>
          </Col>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
        </Row>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
          <Col sm={{size: 6}}>
            <h3>Keep Up-to-date</h3>
            <p>Stay on top on what programs are happening in your school. Find out the latest and trending programs in NSW Public schools.</p>
          </Col>
        </Row>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            <h3>Relevant Information</h3>
            <p>Especially designed for NSW Public schools to allow you access and support for programs relevant to your local needs.</p>
          </Col>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
        </Row>

        <Row className={style.featureBanner}>
          <Col sm={{size: 6}}>
            [screen shot]
          </Col>
          <Col sm={{size: 6}}>
            <h3>Update the Community</h3>
            <p>High level information about programs and initiatives are also published to SchoolFinder to help parents easily find what your school offers.</p>
          </Col>
        </Row>

      </Container>
    </div>


    <div className={style.ctaLayoutBand}>
      <Container>
        <Row className={style.ctaBanner}>
          <Col>
            <Form inline>
              <Label className="mr-2">I'm interested and I'd like to see a demo of how this might work!</Label>
              <Button size="lg" color="primary" tag={RRLink} to="/login" className="ml-2">Start Demo</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.footerBand}>
      <Container>
        <Col size={{sm: 2}}>
          <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
        </Col>
      </Container>
    </div>

  </div>
);

export default HomePage;
