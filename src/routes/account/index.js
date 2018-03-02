import React from 'react';
import { Route } from "react-router-dom";

import Layout from 'layouts/account';
import Programs from './programs';
import Program from './program';
import ProgramNew from './programNew';
import ProgramEdit from './programEdit';


const Account = ({children}) => (
  <Layout>
    <div>
      <Route path="/account/programs" component={Programs} />
      <Route path="/account/programs/:programId" component={Program} />
      <Route path="/account/programs/new" component={ProgramNew} />
      <Route path="/account/programs/:programId/edit" component={ProgramEdit} />
    </div>
  </Layout>
);

export default Account;
