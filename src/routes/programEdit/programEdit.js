import React from 'react';
import Bows from 'bows';
import {
  Row,
  Col,
} from 'reactstrap';

import Breadcrumb from 'components/breadcrumb';
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
      schoolProgramUrl,
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
        <Breadcrumb items={[
          { label: 'Programs' },
          { label: school.name, to: schoolProgramUrl },
          { label: program.name, to: programUrl, },
          { label: `Editing` }
        ]} />

        <Row>
          <Col xs={{size:12}} sm={{size:9}} md={{size:8}}>

            <h1>{program.name}</h1>

            <p>Help record details about the program. Enter any information and click "Save".</p>

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
