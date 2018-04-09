import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'reactstrap';

import ProgramsList from './../components/programsList';
import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl
} from "helpers/url";
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
    const { school } = this.props;
    if (!school) {
      this.props.fetchSchool();
    }
    this.props.fetchProgramsByFilter();
  }
  render() {
    const {
      school,
      isFetchingSchools,
      filteredPrograms,
      isFetchingPrograms,
      filterProps,
    } = this.props;

    if (isFetchingSchools !== false) {
      return <p style={{border: '1px solid blue'}}>Loading...</p>;
    }

    if (!school) {
      return <p>No school</p>;
    }

    return (
      <div>
        <h1 className={style.pageTitle}>
          <span>{school.name}</span>
          Programs
        </h1>

        <Nav tabs>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2018")} activeclassname="active" tag={RRNavLink}>2018</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2017")} activeclassname="active" tag={RRNavLink}>2017</NavLink>
          </NavItem>
        </Nav>

        <div className={style.tabPageContainer}>
          { isFetchingPrograms !== false ?
            <p>Loading...</p> :
            <div>
              {/*<div className={style.tabAddProgramBtn}>*/}
                {/*<Button color="primary" size="lg" onClick={() => getCreateProgramModalUrl(filterProps)} className="mb-4">Add a New Program</Button>*/}
              {/*</div>*/}
              <ProgramsList programs={filteredPrograms}
                          openAddProgram={() => getCreateProgramModalUrl(filterProps)}
                          activeYear={filterProps.year} />
            </div>
          }
        </div>

      </div>
    );
  }
}

export default SchoolPrograms;
