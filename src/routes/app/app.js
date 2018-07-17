import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import { hasSetSchool } from 'store/session/helpers';
import FakeLogin from 'routes/fakeLogin';
import WizardWelcome from 'routes/wizardWelcome';
import WizardSchool from 'routes/wizardSchool';
import WizardSchoolPrograms from 'routes/wizardSchoolPrograms';


const App = ({ session, sessionUser }) => {
  return (
    <AuthProvider session={session} sessionUser={sessionUser}>
      <Router>
        <Switch>
          <Route exact path="/" component={FakeLogin} />
          <PrivateRoute path="/welcome" component={WizardWelcome} />
          <PrivateRoute path="/register/school" component={WizardSchool} />
          <PrivateRoute path="/register/school-programs" component={WizardSchoolPrograms} />
          {/*<PrivateRoute path="/schools/:schoolCode/programs" component={} />*/}
          {/*<PrivateRoute path="/add-snippet" component={} />*/}
          {/*<PrivateRoute path="/programs/:programId" component={} />*/}
          {/*<PrivateRoute path="/programs/:programId/edit" component={} />*/}
          {/*<PrivateRoute path="/add-program" component={} />*/}
          {/*{hasSetSchool(session, sessionUser) ?*/}
            {/*<Redirect to="/schools" /> :*/}
            {/*<Redirect to="/register/school" />*/}
          {/*}*/}
        </Switch>
      </Router>
    </AuthProvider>
  )
};

export default App;
