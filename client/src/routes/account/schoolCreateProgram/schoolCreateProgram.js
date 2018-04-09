import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <div>
        <p><Link to="/account">{`< Programs`}</Link></p>

        <h1>Add a Program</h1>
        <Form onSubmitSuccess={(code, year) => history.push(getSchoolProgramsUrl(code, year))} />
      </div>
    );
  }
}

export default SchoolCreateProgram;
