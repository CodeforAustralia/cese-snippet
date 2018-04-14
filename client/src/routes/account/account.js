import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
// import { Redirect } from 'react-router';

import Layout from './layout';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import CreateProgramModal from './createProgramModal';
import RegistrationFlow from './registrationFlow';

import Decision from './decision';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }
  componentDidMount() {
    this.props.fetchProgramFields();
    this.props.fetchStaffList();
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
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    return (
      <div>
        <Layout>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
            <Route path="/account/create-program" component={SchoolCreateProgram} />
            <Route path="/account/register" component={RegistrationFlow} />
            <Route to="/account/decision" component={Decision} />
            {/*<Redirect to="/account/decision" component={Decision} /> */}
          </Switch>
        </Layout>
        {isModal ? <Route path="/account/create-program" component={CreateProgramModal} /> : null}
      </div>
    )
  }
}

export default Account;
