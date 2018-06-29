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
import Bows from 'bows';

import FetchError from 'components/fetchError';
import Breadcrumb from 'components/breadcrumb';
import { CircleLoading } from 'components/loading';
import ProgramsList from './../components/programsList';
import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl,
} from "helpers/url";
import ChangeSchoolBtn from './../components/changeSchoolBtn';
import style from './style.scss';

const log = Bows('School Programs');


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
      session,
    } = this.props;

    if (!school) {
      log('fetching schools');
      this.props.fetchSchools(session.schools);
    }

    log('fetching programs with filters: ', this.props.filterProps);
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
      errorMessagePrograms,
      errorMessageSchools,
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

        <Breadcrumb items={[
          { label: 'Programs' },
          { label: school.name }
        ]} />

        <div className={style.titleBlock}>
          <div className={style.titleBlockLhs}>

            <div className={style.schoolTitle}>
              <div className={style.schoolTitleAvatar}>
                <div className={style.placeholderAvatar} />
              </div>
              <div className={style.schoolTitleText}>
                <span className={style.schoolTitleTextLine1}>
                  <span className={style.schoolNameBadge}>{school.name}</span> {otherSchoolCodes.length ? <ChangeSchoolBtn schoolCodes={otherSchoolCodes} /> : null}
                </span>
                <span className={style.schoolTitleTextLine2}>
                  <h1 className={style.supTitle}>Programs and Initiatives</h1>
                </span>
              </div>
            </div>

          </div>


          <div className={style.titleBlockRhs}>
            {isFetchingPrograms === false && filteredPrograms.length ?
              <Button color="primary" outline to={getCreateProgramModalUrl(filterProps)} className="mb-4" tag={RRLink}>Add new for {filterProps.year}</Button> :
              null
            }
          </div>
        </div>

        {errorMessageSchools &&
          <FetchError message={errorMessageSchools} name="Schools" onRetry={this.fetchData} />
        }

        {errorMessagePrograms &&
          <FetchError message={errorMessagePrograms} name="Programs" onRetry={this.fetchData} />
        }

        <Nav tabs>
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
              <Col sm={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
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