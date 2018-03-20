import React from 'react';
import isEmpty from 'lodash/isEmpty';

import FiltersNav from './../components/filtersNav';

class SchoolPrograms extends React.Component {

  fetchData() {
    return Promise.all([
      this.props.fetchSchool(),
      this.props.fetchProgramsByFilters(),
    ]);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUpdate(nextProps) {
    if (JSON.stringify(nextProps.filters) !== JSON.stringify(this.props.filters)) {
      this.fetchData();
    }
  }

  render() {

    if (isEmpty(this.props.school)) {
      return <p>Loading School...</p>
    }

    return (
      <div>
        <h1>SchoolPrograms</h1>

        {/*<FiltersNav filters={this.props.availableFilters} />*/}

        <code>School: {JSON.stringify(this.props.school)}</code>
        <hr/>

        {
          typeof this.props.filteredPrograms === 'undefined' ?
            <p>Loading Filtered....</p> :
            this.props.filteredPrograms && this.props.filteredPrograms.length >= 1 ?
              <code>Filtered Programs: {JSON.stringify(this.props.filteredPrograms)}</code> :
              <p>No programs</p>
        }

      </div>
    )
  }
}

export default SchoolPrograms;
