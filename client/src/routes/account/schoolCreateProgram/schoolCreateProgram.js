import React from 'react';
import {
  CreateForm,
  UpdateForm,
} from './../components/programForm';
import { getSchoolProgramsUrl } from 'helpers/url';

class SchoolCreateProgram extends React.Component {
  render() {
    const { history, isEdit } = this.props;

    const Form = isEdit ? UpdateForm : CreateForm;

    return (
      <div style={{border: '1px solid yellow'}}>
        <h1>SchoolCreateProgram</h1>

        <Form onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
