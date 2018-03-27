import React from 'react';
import isEmpty from 'lodash/isEmpty';
import {
  Row,
  Col,
} from "reactstrap";

import FiltersNav from './../components/filtersNav';
// import CreateProgram from './programForm/create';

class SchoolPrograms extends React.Component {

  fetchData() {
    return Promise.all([
      this.props.fetchSchool(),
      this.props.fetchProgramsByFilter(),
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
      <Row>
        <Col>
          <h1>SchoolPrograms</h1>

          <FiltersNav filters={this.props.availableFilters} />

          <code>School: {JSON.stringify(this.props.school)}</code>
          <hr/>

          {
            typeof this.props.filteredPrograms === 'undefined' ?
              <p>Loading Filtered....</p> :
              this.props.filteredPrograms && this.props.filteredPrograms.length >= 1 ?
                <code>Filtered Programs: {JSON.stringify(this.props.filteredPrograms)}</code> :
                <p>No programs</p>
          }

        </Col>
      </Row>
    )
  }
}

export default SchoolPrograms;

//
// <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
