import React from 'react';
import { Route } from "react-router-dom";
import get from 'lodash/get';

import Layout from 'layouts/account';
import Schools from './schools';
import SchoolPrograms from './schoolPrograms';


class Account extends React.Component {
  componentDidMount() {
    return Promise.all([
      this.props.fetchSchools(this.props.session.schools),
    ]);
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>Account</h1>

          {/*<Route exact path="/account/schools" component={Schools} />*/}
          {/*<Route exact path="/account/schools/:schoolCode/programs" component={SchoolPrograms} />*/}
        </div>
      </Layout>
    );
  }
}

export default Account;

