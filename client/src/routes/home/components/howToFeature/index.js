import React from 'react';
import cx from 'classnames';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import Media from "react-media";

import ProductImageHowTo2 from './product-image-2-view.png';
import ProductImageHowTo3 from './product-image-3-add.png';

import style from './style.scss';


class HowToFeature extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <h3 className="text-center mb-4">How it works?</h3>

        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (

              <Row>
                <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
                  <p>1. View and keep up to date with programs for your school.</p>
                  <img src={ProductImageHowTo2} width="280" height="" alt="" className="img-fluid" />
                </Col>

                <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
                  <p>2. Add a new program or update one that exists.</p>
                  <img src={ProductImageHowTo3} width="280" height="" alt="" className="img-fluid" />
                </Col>

                <Col xs={{size: 12}} sm={{size: 4}} className={style.howtoCard}>
                  <p>3. See what programs other schools are implementing with with smart search.</p>
                  <div className={style.howToComingSoonImage}>
                    <span>Coming soon</span>
                  </div>
                </Col>
              </Row>

            ) : (
              <Row>
                <Col sm="12" md="4">

                  <TabContent activeTab={this.state.activeTab} className={style.tabContent}>
                    <TabPane tabId="1" className={style.tabPane}>
                      <Row>
                        <Col>
                          <img src={ProductImageHowTo2} width="280" height="" alt="" className={`${style.howToImage} img-fluid`} />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2" className={style.tabPane}>
                      <Row>
                        <Col>
                          <img src={ProductImageHowTo3} width="280" height="" alt="" className={`${style.howToImage} img-fluid`} />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3" className={style.tabPane}>
                      <Row>
                        <Col>
                          <div className={style.howToComingSoonImage}>
                            <span>Coming soon</span>
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>

                </Col>
                <Col sm="12" md="8">

                  <Nav className={style.tabNav}>
                    <NavItem className={style.tabNavItem}>
                      <NavLink
                        className={cx(style.tabNavLink, this.state.activeTab === '1' ? style.activeTabLink : '')}
                        onClick={() => { this.toggle('1'); }}
                      >
                        1. View and keep up to date with programs for your school.
                      </NavLink>
                    </NavItem>
                    <NavItem className={style.tabNavItem}>
                      <NavLink
                        className={cx(style.tabNavLink, this.state.activeTab === '2' ? style.activeTabLink : '')}
                        onClick={() => { this.toggle('2'); }}
                      >
                        2. Add a new program or update one that exists.
                      </NavLink>
                    </NavItem>
                    <NavItem className={style.tabNavItem}>
                      <NavLink
                        className={cx(style.tabNavLink, this.state.activeTab === '3' ? style.activeTabLink : '')}
                        onClick={() => { this.toggle('3'); }}
                      >
                        3. See what programs other schools are implementing with with smart search.
                      </NavLink>
                    </NavItem>
                  </Nav>

                </Col>
              </Row>
            )
          }
        </Media>

      </div>
    )
  }
}

export default HowToFeature;
