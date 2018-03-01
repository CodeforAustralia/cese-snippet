import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from 'routes/home';
import Login from 'routes/login';
import Logout from 'routes/logout';
import AccountPrograms from 'routes/accountPrograms'
import AccountProgram from 'routes/accountProgram'
import AccountProgramNew from 'routes/accountProgramNew'
import AccountProgramEdit from 'routes/accountProgramEdit'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/logout" component={Logout} />

      {/*/!* todo *!/*/}
      <Route path="/account/programs" component={AccountPrograms} />
      <Route path="/account/programs/:programId" component={AccountProgram} />
      <Route path="/account/programs/new" component={AccountProgramNew} />
      <Route path="/account/programs/:programId/edit" component={AccountProgramEdit} />
    </div>
  </Router>
);

export default App;
