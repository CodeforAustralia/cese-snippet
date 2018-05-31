import React from 'react';
import {
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";
import cx from 'classnames';

import Layout from './layout';
import RegisterForm from './components/registerForm';
import CallToActionBanner from './components/callToActionBanner';

import DetLogo from './doe-black-logo.png';
import style from './style.scss';
import HandsIcon from './hands.svg';
import IdeaIcon from './idea.svg';
import NswIcon from './nsw.svg';
import WheelIcon from './wheel.svg';
import WifiIcon from './wifi.svg';
import CloudIcon from './cloud.svg';
import ScrollToTopOnMount from 'components/scrollToTopOnMount';

import ProductImageHowTo1 from './product-image-1-login.png';
import ProductImageHowTo2 from './product-image-2-view.png';
import ProductImageHowTo3 from './product-image-3-add.png';


const HomePage = () => (

  <Layout homeHeader={true}>

    <ScrollToTopOnMount />

    <div className={style.topLayoutBand}>
      <Container>
        <Row className={style.layoutHeadline}>
          <Col xs={{size: 12}} lg={{size: 7}} className={style.layoutHeadlineText}>
            <div className={style.headline}>
              <span className={style.comingSoonBadgeContainer}><Badge color="warning" className="h4 ml-1" pill>COMING SOON</Badge></span>
              <h2>Snippet</h2>
              <p className="h4">Be one of the key schools in trialling and helping forge a better way in discovering and sharing <em>snippets</em> of knowledge for local public school initiatives in NSW.</p>
            </div>
          </Col>

          <Col xs={{size: 12}} lg={{size: 5}}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>


    <div className={style.alertBanner}>
      <Container>
        <p>Currently seeking pilot interest.</p>
      </Container>
    </div>


    <div className={style.howtoBand}>
      <Container>
        <Row className={cx(style.howtoBannerTop, 'mb-4')}>
          <Col sm={{size: 8, offset: 2}} className="text-center">
            <h3>Why Snippet?</h3>
            <p>Don't let your amazing initiatives and insights from the frontline go under the radar. Showcase, teach and learn from others beyond the school gate.</p>
          </Col>
        </Row>

        <Row className={cx(style.howtoBannerTop, 'mb-2')}>
          <Col>
            <h3 className="text-center">How does it work?</h3>
          </Col>
        </Row>

        <Row className={style.howtoBannerLower}>
          <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
            <p>1. Log in with your Department of Education login.</p>
            <img src={ProductImageHowTo1} width="350" height="" alt="" className="img-fluid" />
          </Col>

          <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
            <p>2. View and keep up to date with programs by your school.</p>
            <img src={ProductImageHowTo2} width="350" height="" alt="" className="img-fluid" />
          </Col>

          <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
            <p>3. Add a new program or update one that exists.</p>
            <img src={ProductImageHowTo3} width="350" height="" alt="" className="img-fluid" />
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


    <div className={style.lowerLayoutBand}>
      <Container>

        <Row>
          <Col xs={{size: 12}} sm={{size:10, offset:1}}>

            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={WheelIcon} width={70} height={70} alt="Icon of a wheel" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Discover and Learn</h3>
                <p>Know what other schools are doing well, and adapt to your own context. Save time and energy. No one wants to reinvent the wheel!</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={CloudIcon} width={70} height={70} alt="Icon of a cloud" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Share your knowledge</h3>
                <p>Never underestimate what you know. What is obvious to you may be amazing to someone else!</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={IdeaIcon} width={70} height={70} alt="Icon of a light bulb idea" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Amplify your Impact</h3>
                <p>Imagine your insight helping 70 more students. Sharing your knowledge may help other schools positively impact their students.</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={HandsIcon} width={70} height={70} alt="Icon of hands" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Get Recognised</h3>
                <p>Get some love from your peers. You can get "Shout Outs" for your good work. Of course, don't forget to give a Shout Out back to others to say thank you!</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={WifiIcon} width={70} height={70} alt="Icon of wifi" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Keep Up-to-date</h3>
                <p>Stay on top on what programs are happening in your school. Find out the latest and trending programs in NSW Public schools.</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={NswIcon} width={70} height={70} alt="Icon of NSW State" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Find Relevant Information</h3>
                <p>Especially designed for NSW Public Schools to allow you access and support for programs relevant to your local needs.</p>
              </div>
            </div>


            <div className={style.valuepropBanner}>
              <div className={style.valuepropIcon}>
                <img src={WheelIcon} width={70} height={70} alt="Icon of a wheel" />
              </div>
              <div className={style.valuepropProp}>
                <h3>Update the Community</h3>
                <p>High level information about programs and initiatives are also published to SchoolFinder to help parents easily find what your school offers.</p>
              </div>
            </div>

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

    <div className={style.footerBand}>
        <Container>
          <Col size={{sm: 2}}>
            <img src={DetLogo} width={130} height={47} alt="NSW Department of Education logo" />
          </Col>
        </Container>
      </div>

  </Layout>
);

export default HomePage;
