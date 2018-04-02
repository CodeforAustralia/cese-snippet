import React from 'react';
import { NavLink } from "react-router-dom";

import ProgramsList from './../components/programsList';
import { getCreateProgramModalUrl } from "helpers/url";


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

    return (
      <div style={{border: '1px solid blue'}}>
        <h1>SchoolPrograms</h1>

        <ul>
          <li><NavLink to="/account/schools/76862/programs/2018">Programs 2018</NavLink></li>
          <li><NavLink to="/account/schools/76862/programs/2017">Programs 2017</NavLink></li>
        </ul>

        <p>School: {school.name}</p>

        { isFetchingPrograms !== false ?
          <p>Loading...</p> :
          <ProgramsList programs={filteredPrograms}
                        openAddProgram={() => getCreateProgramModalUrl(filterProps.year, filterProps.code)}
                        activeYear={filterProps.year} />
        }
      </div>
    );
  }
}

export default SchoolPrograms;
