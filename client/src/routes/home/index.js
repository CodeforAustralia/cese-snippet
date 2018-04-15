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
              <h2>Programs happening in schools now</h2>
              <p className="h4">For school staff to view or publish news about program applications in NSW Public Schools.</p>
              <p className={style.headlineCta}><Button size="lg" color="primary" tag={RRLink} to="/login">Start Demo</Button></p>
            </div>
          </Col>
        </Row>

        <Row className={style.layoutFeatures}>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <p>Icon</p>
              <h3 className="h4">Feature one</h3>
              <p>Clearly describe what tangible feature one in this product does.</p>
            </div>
          </Col>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <p>Icon</p>
              <h3 className="h4">Feature two</h3>
              <p>Clearly describe what tangible feature two in this product does.</p>
            </div>
          </Col>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <p>Icon</p>
              <h3 className="h4">Feature three <Badge color="light" pill className={style.comingSoonBadge}>Coming soon</Badge></h3>
              <p>Clearly describe what tangible feature three in this product does.</p>
            </div>
          </Col>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <p>Icon</p>
              <h3 className="h4">Feature four <Badge color="light" pill className={style.comingSoonBadge}>Coming soon</Badge></h3>
              <p>Clearly describe what tangible feature four in this product does.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.lowerLayoutBand}>
      <Container>

        <Row className={style.featureBanner}>
          <Col sm={{size: 8, offset: 2}}>
            <h3>Why Snippet?</h3>
            <p>You do a lot as a school staff, and often your amazing initiatives and insights from the frontline may go under the radar. Snippet hopes to give you a space to showcase, teach and learn from others beyond the school gate in the context of NSW Public schools.</p>
          </Col>
        </Row>

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

      </Container>
    </div>


    <div className={style.lowerCtaLayoutBand}>
      <Container>
        <Row className={style.ctaBanner}>
          <Col>
            <Form inline>
              <Label className="mr-2">I'm interested and I want to get started!</Label>
              <Button size="lg" color="primary" tag={RRLink} to="/login" className="ml-2">Start Demo</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.footerBand}>
      <Container>
        <Col size={{sm: 2}}>
          <img src={DetLogo} width={130} height={47} />
        </Col>
      </Container>
    </div>

  </div>
);

export default HomePage;
