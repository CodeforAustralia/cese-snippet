import { h } from 'preact';
import { Router } from 'preact-router';

import Home from 'routes/home';
import Login from 'async!routes/login';
import Logout from 'async!routes/logout';
import AccountPrograms from 'async!routes/accountPrograms'
import AccountProgram from 'async!routes/accountProgram'
import AccountProgramNew from 'async!routes/accountProgramNew'
import AccountProgramEdit from 'async!routes/accountProgramEdit'

import Nav from 'components/nav';

const App = () => (
  <div>
    <Router>

      <Home path="/" />

      <Login path="/login" />

      <Logout path="/logout" />

      <AccountPrograms path="/account/programs" />
      <AccountProgram path="/account/programs/:programId" />
      <AccountProgramNew path="/account/programs/new" />
      <AccountProgramEdit path="/account/programs/:programId/edit" />

    </Router>

    <Nav />
  </div>
);

export default App;
