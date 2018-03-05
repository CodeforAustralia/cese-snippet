import React from 'react';
import { Route } from "react-router-dom";

import Layout from 'layouts/account';
import Programs from './programs';
import Program from './program';
import ProgramNew from './programNew';
import ProgramEdit from './programEdit';


class Account extends React.Component {
  componentDidMount() {
    // new Promise.all([
    //   this.props.fetchAppliedPrograms(),
    //   this.props.fetchSchools(),
    // ]);
  }
  render() {
    return (
      <Layout>
        <div>
          <Route exact path="/account/programs" component={Programs} />
          <Route exact path="/account/programs/:programId" component={Program} />
          <Route exact path="/account/programs/:programId/edit" component={ProgramEdit} />
          <Route exact path="/account/new-program" component={ProgramNew} />
        </div>
      </Layout>
    );
  }
}

export default Account;
