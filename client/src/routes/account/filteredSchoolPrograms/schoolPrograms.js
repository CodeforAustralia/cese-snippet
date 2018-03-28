import React from 'react';
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import bows from 'bows';
import get from 'lodash/get';
import { Link as RRLink } from 'react-router-dom';

import FiltersNav from './../components/filtersNav';
// import CreateProgram from './programForm/create';
import Loading from 'components/loading';
import Form from './../components/programForm/create';
import { getCreateProgramUrl } from "helpers/url";


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
      this.fetchData()
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
      <div>
        <Row>
          <Col>
            <p>School: {school.name}</p>
            <FiltersNav filters={availableFilters} />

          </Col>
        </Row>

        <Row>
          <Col>
            {
              (() => {

                // if (!filteredPrograms.length) {
                //   return <p>School has no programs for this filter.</p>
                // }

                if (isFetching) {
                  return <Loading />
                }

                return (
                  <div>
                    <Button color="primary" to={'/account/create-program'} tag={RRLink}>Add Program</Button>
                    <ul>
                      {filteredPrograms.map((program, idx) => (
                        <li key={idx}>{program.name} {program.year}</li>
                      ))}
                    </ul>
                  </div>
                )
              })()
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default SchoolPrograms;

//
// <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
