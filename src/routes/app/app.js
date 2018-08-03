import React from 'react';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import AuthProvider from 'components/auth/authProvider';
import PrivateRoute from 'components/auth/privateRoute';
import FakeLogin from 'routes/fakeLogin';
import WizardWelcome from 'routes/wizardWelcome';
import WizardSchool from 'routes/wizardSchool';
import WizardSchoolPrograms from 'routes/wizardSchoolPrograms';
import SchoolPrograms from "routes/schoolPrograms";

const App = ({ session, sessionUser }) => {
  return (
    <AuthProvider session={session} sessionUser={sessionUser}>
      <Router>
        <Switch>
          <Route exact path="/" component={FakeLogin} />
          <PrivateRoute path="/onboarding/welcome" component={WizardWelcome} />
          <PrivateRoute path="/onboarding/school" component={WizardSchool} />
          <PrivateRoute path="/onboarding/school-programs" component={WizardSchoolPrograms} />
          <PrivateRoute path="/schools/:schoolCode/programs/:year" component={SchoolPrograms} />
          {/*<PrivateRoute path="/snippets/new" component={} />*/}
          {/*<PrivateRoute path="/programs/:programId" component={} />*/}
          {/*<PrivateRoute path="/programs/:programId/edit" component={} />*/}
          {/*<PrivateRoute path="/programs/new" component={} />*/}
          {sessionUser.schools && sessionUser.schools ?
            <Redirect to={`/schools/${sessionUser.schools[0]}/programs/2018`} /> :
            <Redirect to="/onboarding/welcome" />
          }
        </Switch>
      </Router>
    </AuthProvider>
  )
};

export default App;
