import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch,
} from "react-router-dom";
import isEmpty from 'lodash/isEmpty';

import Layout from 'layouts/account';
import AuthButton from 'components/auth/authButton';
import SchoolPrograms from './schoolPrograms';


class Account extends React.Component {

  componentDidMount() {
    this.props.fetchSchools(this.props.userSchoolCodes);
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
            <Route path="/account/schools/:schoolCode/programs" component={SchoolPrograms} />
            <Redirect exact from="/account" to={`/account/schools/${this.props.userFirstSchoolCode}/programs`} />
          </Switch>
        </div>
      </Layout>
    );
  }
}

export default Account;


// todo
// /account/schools/:schoolCode/programs
// /account/schools/:schoolCode/programs/:year
// /account/programs/:programId

