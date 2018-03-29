import React from 'react';
import { CreateForm } from './../components/programForm';
import { getSchoolProgramsUrl } from 'helpers/url';

class SchoolCreateProgram extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div style={{border: '1px solid yellow'}}>
        <h1>SchoolCreateProgram</h1>

        <CreateForm onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
