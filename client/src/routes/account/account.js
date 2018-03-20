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
import { getDefaultYear } from "store/programs/helpers";


class Account extends React.Component {

  componentDidMount() {
    this.props.fetchSchools(this.props.userSchoolCodes);
  }

  render() {

    if (isEmpty(this.props.session)) {
      return <p>Loading...</p>
    }

    const firstCode = this.props.userSchoolCodes[0];
    const defaultYear = getDefaultYear();

    return (
      <Layout>
        <AuthButton />
        <div>
          <h1>Account</h1>
          <Switch>
            <Route path="/account/schools/:code/programs/:year" component={FilteredSchoolPrograms} />
            <Redirect exact from="/account" to={`/account/schools/${firstCode}/programs/${defaultYear}`} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Account;


// todo
// /account/schools/:code/programs
// /account/schools/:code/programs/:year
// /account/programs/:programId

