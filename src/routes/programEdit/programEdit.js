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
import { getProgramUrl } from "helpers/url";
import { UpdateForm as Form } from "./../programsNew/form";


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
  }

  fetchOnceAfterProgram() {
    const {
      program,
      school,
      isFetchingSchool,
    } = this.props;
    if (!school && isFetchingSchool !== true) {
      log('fetching school');
      this.props.fetchSchool(program.schoolCode);
    }
  }

  componentDidUpdate(prevProps) {
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
    } = this.props;

    if (isFetchingProgram !== false || isFetchingSchool !== false) {
      return <PageLoading />
    }

    const programUrl = getProgramUrl(program.id);

    return (
      <Layout>
        <Button color="link" tag={RRLink} to={programUrl} className="pl-0">{`< ${program.name}`}</Button>

        <Row>
          <Col xs={{size:12}} sm={{size:9}} md={{size:8}}>

            <h1>{program.name}</h1>

            <Form onSubmitSuccess={() => console.log('Woo hoo')} />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default Program;
