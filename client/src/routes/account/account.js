import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch,
} from "react-router-dom";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import LayoutAccount from 'layouts/account';
import FilteredSchoolPrograms from './filteredSchoolPrograms';
import CreateProgram from './programForm/create';

class Account extends React.Component {

  componentDidMount() {
    Promise.all([
      this.props.fetchSchools(this.props.schoolCodes),
      this.props.fetchProgramsBySchool(this.props.defaultCode),
    ]);
  }

  render() {
    return (
      <LayoutAccount>
        <Container>
          <Row>
            <Col>
              <h1>Account</h1>
              <Switch>
                <Route path="/account/create-program" render={() => {
                  return <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
                }} />
                <Route path="/account/schools/:code/programs/:year" component={FilteredSchoolPrograms} />
                <Redirect exact from="/account" to={`/account/schools/${this.props.defaultCode}/programs/${this.props.defaultYear}`} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </LayoutAccount>
    );
  }
}

export default Account;
