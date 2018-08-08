import React from 'react';
import Bows from 'bows';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import {
  Link as RRLink,
} from 'react-router-dom';

import Layout from 'layouts/app';
import { PageLoading } from "components/loading";
import Form from "./form";


const log = Bows('V: Program');

class Program extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      program,
      isFetchingProgram,
    } = this.props;

    if (!program && isFetchingProgram !== true) {
      log('fetching program');
      this.props.fetchProgram();
    }
    this.props.fetchCms();
  }

  fetchOnceAfterProgram() {
    const {
      program,
      isFetchingSchool,
    } = this.props;

    if (isFetchingSchool !== true) {
      log('fetching school');
      this.props.fetchSchool(program.schoolCode);
    }
  }

  componentDidUpdate() {
    if (this.props.program && !this.props.school) {
      this.fetchOnceAfterProgram();
    }
  }

  render() {
    const {
      program,
      isFetchingProgram,
      school,
      isFetchingSchool,
      onSubmit,
      programUrl,
      history,
      cms,
      isFetchingCms,
      sessionUser,
    } = this.props;

    if (isFetchingProgram !== false || isFetchingSchool !== false || isFetchingCms !== false) {
      return <PageLoading />
    }

    return (
      <Layout>
        <Button color="link" tag={RRLink} to={programUrl} className="pl-0">{`< ${program.name}`}</Button>

        <Row>
          <Col xs={{size:12}} sm={{size:9}} md={{size:8}}>

            <p className="mb-0 mt-3">{school.name}</p>
            <h1>{program.name}</h1>

            <Form optionsSchools={[
                    { value: school.code, label: school.name }
                  ]}
                  cms={cms}
                  sessionUser={sessionUser}
                  model={program}
                  onSubmit={onSubmit}
                  onSubmitSuccess={() => history.push(programUrl)}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Program;
