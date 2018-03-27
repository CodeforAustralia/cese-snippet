import React from 'react';
import {
  Row,
  Col,
} from "reactstrap";
import bows from 'bows';

import FiltersNav from './../components/filtersNav';
// import CreateProgram from './programForm/create';
import Loading from 'components/loading';


const log = bows("SchoolPrograms");


class SchoolPrograms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    }
  }

  componentDidMount() {
    this.fetchData().then(() => {
      this.setState(() => ({ isReady: true }));
    });
  }

  fetchData() {
    log('Fetching data');
    return this.props.fetchProgramsByFilter();
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filters) !== JSON.stringify(this.props.filters)) {
      this.fetchData();
    }
  }

  render() {
    const { isReady } = this.state;
    const {
      school,
      filteredPrograms,
      availableFilters,
      isFetching,
    } = this.props;

    if (!isReady) {
      return <Loading />
    }

    return (
      <Row>
        <Col>
          <p>School: {school.name}</p>

          <FiltersNav filters={availableFilters} />

          <p>Filtered Programs:</p>
          {
            (() => {

              if (!filteredPrograms.length) {
                return <p>School has no programs for this filter.</p>
              }

              if (isFetching) {
                return <Loading />
              }

              return (
                <ul>
                  {filteredPrograms.map((program, idx) => (
                    <li key={idx}>{program.name} {program.year}</li>
                  ))}
                </ul>
              )
            })()
          }
        </Col>
      </Row>
    );
  }
}

export default SchoolPrograms;

//
// <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
