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
              <p className="h4">For school staff to discover and publish practical knowledge, insights and resources about programs in NSW Public Schools.</p>
              <p className={style.headlineCta}><Button size="lg" color="primary" tag={RRLink} to="/login">Start Demo</Button></p>
            </div>
          </Col>
        </Row>

        <Row className={style.layoutFeatures}>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <p>Icon</p>
              <h3 className="h4">School level view</h3>
              <p>View and manage all of your school's active programs, update them and create new ones. View programs historically from your school too.</p>
            </div>
          </Col>
          {/*<Col sm={{size: 3}}>*/}
            {/*<div className={style.featureBlock}>*/}
              {/*<Badge color="warning" pill className={style.comingSoonBadge}>Coming soon</Badge>*/}
              {/*<p>Icon</p>*/}
              {/*<h3 className="h4">Attach documents</h3>*/}
            {/*</div>*/}
          {/*</Col>*/}
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <Badge color="info" pill className={style.comingSoonBadge}>Coming soon</Badge>
              <p>Icon</p>
              <h3 className="h4">Fast publishing</h3>
              <p>Publish and share resources like work sheets, documents and photographs about active school programs in real time from your smartphone. Build the rich story of each program over time.</p>
            </div>
          </Col>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <Badge color="info" pill className={style.comingSoonBadge}>Coming soon</Badge>
              <p>Icon</p>
              <h3 className="h4">Intelligent Search</h3>
              <p>Research tools allow you to earch for programs occurring in other schools using local and specific search criteria to find programs used in others schools in conditions alike your own.</p>
            </div>
          </Col>
          <Col sm={{size: 3}}>
            <div className={style.featureBlock}>
              <Badge color="info" pill className={style.comingSoonBadge}>Coming soon</Badge>
              <p>Icon</p>
              <h3 className="h4">Fresh content</h3>
              <p>Over time we'll learn about you and your school and we'll deliver relevant content to you about programs happening at your school as well as those happening in all NSW Public Schools.</p>
            </div>
          </Col>
        </Row>
      </Container>


    </div>

    <div className={style.alertBanner}>
      <Container>
        <p>Staff from over 1000 schools have already signed up.</p>
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
          <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
        </Col>
      </Container>
    </div>

  </div>
);

export default HomePage;
