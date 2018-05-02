import React from 'react';
import {
  NavLink as RRNavLink,
  Link as RRLink,
} from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
} from 'reactstrap';
import without from 'lodash/without';

import { CircleLoading } from 'components/loading';
import ProgramsList from './../components/programsList';
import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl,
} from "helpers/url";
import ChangeSchoolBtn from './../components/changeSchoolBtn';
import style from './style.scss';


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
    const { school, session } = this.props;
    if (!school) {
      this.props.fetchSchools(session.schools);
    }
    this.props.fetchProgramsByFilter();
  }

  sortByLatestDate(programs = []) {
    return programs.sort((a, b) => {
      return new Date(a.createdAt) < new Date(b.createdAt);
    });
  }

  render() {
    const {
      school,
      isFetchingSchools,
      filteredPrograms,
      isFetchingPrograms,
      filterProps,
      session,
    } = this.props;

    if (isFetchingSchools !== false) {
      return <CircleLoading />
    }

    if (!school) {
      return <p>No school</p>;
    }

    const otherSchoolCodes = without(session.schools, school.code);

    return (
      <div>

        <div className={style.titleBlock}>
          <div className={style.titleBlockLhs}>
            <h1>
              <span className={style.supTitle}>{school.name} {otherSchoolCodes.length ? <ChangeSchoolBtn schoolCodes={otherSchoolCodes} /> : null}</span>
              Programs
            </h1>
          </div>
          <div className={style.titleBlockRhs}>
            {isFetchingPrograms === false && filteredPrograms.length ?
              <Button color="primary" outline to={getCreateProgramModalUrl(filterProps)} className="mb-4" tag={RRLink}>Add a New Program for {filterProps.year}</Button> :
              null
            }
          </div>
        </div>

        <Nav pills>
          <NavItem>
            <NavLink color="light" to={getSchoolProgramsUrl(school.code, "2018")} activeclassname="active" tag={RRNavLink}>2018</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2017")} activeclassname="active" tag={RRNavLink}>2017</NavLink>
          </NavItem>
        </Nav>

        <div className={style.tabPageContainer}>
          { isFetchingPrograms !== false ?
            <CircleLoading /> :

            <Row>
              <Col sm={{size: 6, offset: 3}}>
                  <ProgramsList programs={this.sortByLatestDate(filteredPrograms)}
                              activeYear={filterProps.year} />
              </Col>
            </Row>
          }
        </div>

      </div>
    );
  }
}

export default SchoolPrograms;
