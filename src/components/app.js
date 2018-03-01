import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'async!routes/home';
import Login from 'async!routes/login';
import Logout from 'async!routes/logout';
import AccountPrograms from 'async!routes/accountPrograms'
import AccountProgram from 'async!routes/accountProgram'
import AccountProgramNew from 'async!routes/accountProgramNew'
import AccountProgramEdit from 'async!routes/accountProgramEdit'

import Nav from 'components/nav';

const App = () => (
  <div>
    <BrowserRouter>

      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/logout" component={Logout} />


      {/* todo */}
      <Route path="/account/programs" component={AccountPrograms} />
      <Route path="/account/programs/:programId" component={AccountProgram} />
      <Route path="/account/programs/new" component={AccountProgramNew} />
      <Route path="/account/programs/:programId/edit" component={AccountProgramEdit} />

    </BrowserRouter>

    <Nav />
  </div>
);

export default App;
