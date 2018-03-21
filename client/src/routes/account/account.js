import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch,
} from "react-router-dom";
import isEmpty from 'lodash/isEmpty';

import Layout from 'layouts/account';
import AuthButton from 'components/auth/authButton';
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

    if (isEmpty(this.props.session)) {
      return <p>Loading...</p>
    }

    return (
      <Layout>
        <AuthButton />
        <div>
          <h1>Account</h1>
          <Switch>
            <Route path="/account/create-program" render={() => {
              return <CreateProgram code={this.props.defaultCode} year={this.props.defaultYear} />
            }} />
            <Route path="/account/schools/:code/programs/:year" component={FilteredSchoolPrograms} />
            <Redirect exact from="/account" to={`/account/schools/${this.props.defaultCode}/programs/${this.props.defaultYear}`} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Account;
