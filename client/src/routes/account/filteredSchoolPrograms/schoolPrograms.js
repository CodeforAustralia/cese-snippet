import React from 'react';
import {
  Row,
  Col,
  Button,
} from "reactstrap";
import bows from 'bows';
import { withRouter } from 'react-router';

import FiltersNav from './../components/filtersNav';
// import CreateProgram from './programForm/create';
import Loading from 'components/loading';
import Form from './../components/programForm/create';
import { getCreateProgramUrl } from "helpers/url";


const log = bows("SchoolPrograms");


class SchoolPrograms extends React.Component {

  constructor(props) {
    super(props);
    this.navigateToCreateProgramForm = this.navigateToCreateProgramForm.bind(this);
    this.state = {
      isReady: false,
    }
  }

  componentDidMount() {
    this.fetchData().then(() => {
      this.setState(() => ({ isReady: true }));
    });
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filters) !== JSON.stringify(this.props.filters)) {
      this.fetchData()
    }
  }

  fetchData() {
    log('Fetching data');
    return this.props.fetchProgramsByFilter();
  }

  navigateToCreateProgramForm() {
    this.props.activateCreateProgramFormScope({
      code: this.props.school.code,
      year: this.props.filters.year,
    });
    this.props.history.push('/account/create-program');
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
                    <Button onClick={() => this.navigateToCreateProgramForm()}>Add Program</Button>
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

export default withRouter(SchoolPrograms);

//
// <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
