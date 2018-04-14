import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import {
  Redirect
} from 'react-router';

import Layout from './layout';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import CreateProgramModal from './createProgramModal';
import RegistrationFlow from './registrationFlow';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }
  componentDidMount() {
    const { userSchoolCodes } = this.props;
    if (userSchoolCodes && userSchoolCodes.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
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
    const {
      schools,
      isFetching,
      location
    } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    return (
      <div>
        <Layout schools={schools}>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
            <Route path="/account/create-program" component={SchoolCreateProgram} />
            <Route path="/account/register" component={RegistrationFlow} />
            <Redirect to={`/account/schools/4118/programs/2018`} />
          </Switch>
        </Layout>
        {isModal ? <Route path="/account/create-program" component={CreateProgramModal} /> : null}
      </div>
    )
  }
}

export default Account;
