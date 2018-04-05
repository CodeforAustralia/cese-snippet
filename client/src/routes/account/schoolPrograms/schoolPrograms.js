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
      return <p>Loading...</p>;
    }

    if (!school) {
      return <p>No school</p>;
    }

    const openAddProgram = () => getCreateProgramModalUrl(filterProps.year, filterProps.code);

    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>{school.name}</BreadcrumbItem>
          <BreadcrumbItem>Programs</BreadcrumbItem>
        </Breadcrumb>

        <div>
          <div className="float-right">
            <Button color="primary" size="lg" onClick={openAddProgram} className="mb-4">Add a New Program</Button>
          </div>
          <h1>Programs</h1>
        </div>

        <Nav tabs>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2018")} activeClassName="active" tag={RRNavLink}>2018</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={getSchoolProgramsUrl(school.code, "2017")} activeClassName="active" tag={RRNavLink}>2017</NavLink>
          </NavItem>
        </Nav>

        { isFetchingPrograms !== false ?
          <p>Loading...</p> :
          <ProgramsList programs={filteredPrograms}
                        openAddProgram={openAddProgram}
                        activeYear={filterProps.year} />
        }
      </div>
    );
  }
}

export default SchoolPrograms;
