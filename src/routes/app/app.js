import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from 'components/auth/privateRoute';
import FakeLogin from 'routes/fakeLogin';
import WizardWelcome from 'routes/wizardWelcome';
import WizardSchool from 'routes/wizardSchool';
import WizardSchoolPrograms from 'routes/wizardSchoolPrograms';
import SchoolPrograms from "routes/schoolPrograms";
import Program from 'routes/program';
import SnippetNew from 'routes/snippetsNew';
import SnippetsNewModal from 'routes/snippetsNewModal';
import ProgramNew from 'routes/programsNew';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const {
      sessionUser,
      location,
    } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    return (
      <div>
        {isModal ? <Route path="/snippets/new" render={(props) => <SnippetsNewModal {...props} />} /> : null}
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={FakeLogin} />
          <PrivateRoute path="/onboarding/welcome" component={WizardWelcome} />
          <PrivateRoute path="/onboarding/school" component={WizardSchool} />
          <PrivateRoute path="/onboarding/school-programs" component={WizardSchoolPrograms} />
          <PrivateRoute path="/schools/:schoolCode/programs/:year" component={SchoolPrograms} />
          <PrivateRoute path="/snippets/new" component={SnippetNew} />
          <PrivateRoute path="/programs/new" component={ProgramNew} />
          <PrivateRoute path="/programs/:programId" component={Program} />
          {/*<PrivateRoute path="/programs/:programId/edit" component={} />*/}
          {/*<PrivateRoute path="/programs/:programId/snippets" component={Program} />*/}
          {sessionUser.schools && sessionUser.schools.length ?
            <Redirect to={`/schools/${sessionUser.schools[0]}/programs/2018`} /> :
            <Redirect to="/onboarding/welcome" />
          }
        </Switch>
      </div>
    )
  }
}

export default App;
