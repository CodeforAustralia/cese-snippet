import React from 'react';
import { NavLink } from "react-router-dom";

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
            !filteredPrograms.length ?
              <p>No programs for that filter</p> :
              <p>Programs: {filteredPrograms.map((program, idx) => <span key={idx}>{program.name}</span>)}</p>
        }
      </div>
    );
  }
}

export default SchoolPrograms;
