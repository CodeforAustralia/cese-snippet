import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
// import { Redirect } from 'react-router';
import Bows from 'bows';
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';

import Layout from 'layouts/app';
import Breadcrumb from 'components/breadcrumb';
import { ComponentLoading, BoxLoading } from 'components/loading';
import {
  getSchoolProgramsUrl,
} from 'helpers/url';
import ProgramsList from './programsList';

import style from './style.scss';


const log = Bows('V: SchoolPrograms');

class SchoolPrograms extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filterProps) !== JSON.stringify(this.props.filterProps)) {
      this.fetchData();
    }
  }

  fetchData() {
    const {
      school,
      isFetchingSchools,
      fetchSchool,
      programs,
      isFetchingPrograms,
      fetchProgramsByFilter,
    } = this.props;
    if (!school && isFetchingSchools !== true) {
      log('fetching school');
      fetchSchool();
    }
    // todo - check if there is a program filter created, such as a year without programs
    if ((!programs || !programs.length) && isFetchingPrograms !== true) {
      log('fetching programs');
      fetchProgramsByFilter();
    }
  }

  render() {
    const {
      school,
      isFetchingSchools,
      programs,
      isFetchingPrograms,
      filterProps,
    } = this.props;

    if (isFetchingSchools !== false) {
      return <BoxLoading  />
    }

    return (
      <Layout>

        <Breadcrumb items={[
          { label: 'Programs' },
          { label: school.name }
        ]} />

        <div className={style.titleBlock}>
          <div className={style.titleBlockLhs}>
            <div className={style.schoolTitle}>
              <div className={style.schoolTitleAvatar}>
                <img className={style.schoolAvatar} src={school.avatar} width={70} height={70} alt={`${school.name} logo`} />
              </div>
              <div className={style.schoolTitleText}>
                <span className={style.schoolTitleTextLine1}>
                  <span className={style.schoolNameBadge}>{school.name}</span>
                </span>
                <span className={style.schoolTitleTextLine2}>
                  <h1 className={style.supTitle}>Programs and Initiatives</h1>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Nav tabs>
          <NavItem>
            <NavLink color="light" to={getSchoolProgramsUrl(school.code, "2018")} activeclassname="active" tag={RRNavLink}>2018</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2017")} activeclassname="active" tag={RRNavLink}>2017</NavLink>
          </NavItem>
        </Nav>

        <div className={style.tabPageContainer}>
          <Row>
            <Col sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
              {isFetchingPrograms !== false ?
                <ComponentLoading innerPage={true} /> :
                <ProgramsList programs={programs}
                              school={school}
                              year={filterProps.year}
                />
              }
            </Col>
          </Row>
        </div>

      </Layout>
    );
  }
}

export default SchoolPrograms;
