import React from 'react';
import Bows from 'bows';

import Layout from "layouts/app";
import Breadcrumb from "components/breadcrumb";
import { getSchoolProgramsUrl } from "helpers/url";
import { UpdateForm as Form } from './form';
import {ComponentLoading} from "../../components/loading/index";


const log = Bows('V: ProgramsNew');

class ProgramsNew extends React.Component {

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const {
      program,
      isFetchingProgram,
      fetchProgram,
    } = this.props;

    if (!program || isFetchingProgram !== true) {
      log('fetching program');
      fetchProgram();
    }
  }

  render() {
    const {
      program,
      isFetchingProgram,
      history,
    } = this.props;

    const programUrl = getSchoolProgramsUrl(program.schoolCode, program.year);

    return (
      <Layout>
        <Breadcrumb items={[
          { label: 'Programs', to: programUrl },
          { label: 'New Program' },
        ]} />

        <div>
          <h1 className="mb-4">New Program</h1>

          <p>Tell us about a school program in a nutshell, or be as detailed as you want.</p>
          <p className="mb-4">Contributing to the list of program in your school is the first step in helping create awareness about your programs and initiatives for the school community.</p>

          {isFetchingProgram !== false ?
            <ComponentLoading /> :
            <Form onSubmitSuccess={() => history.push(getSchoolProgramsUrl(program.schoolCode, program.year))} />
          }
        </div>
      </Layout>
    )
  }

}

export default ProgramsNew;
