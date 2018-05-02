import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import { Redirect } from 'react-router';
import Bows from 'bows';

import Layout from './layout';
import Program from './program';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import CreateProgramModal from './createProgramModal';
import RegistrationFlow from './registrationFlow';
// import Schools from './schools';

import { BoxLoading } from 'components/loading';


const log = Bows('Account View');


class Account extends React.Component {

  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentDidMount() {
    const { schools, userSchoolCodes } = this.props;
    if (!schools.length) {
      if (userSchoolCodes.length) {
        log('Fetching schools.');
        this.props.fetchSchools(this.props.userSchoolCodes);
      }
    }
    log('Fetching static.');  // todo - don't refetch
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
      location,
      schools,
      isFetchingSchools,
    } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    if (!isModal && isFetchingSchools !== false) {
      return <BoxLoading />
    }

    const RedirectFork = () => {
      if (schools.length) {
        return <Redirect to={`/account/schools/${schools[0].code}/programs/${2018}`} />
      } else {
        return null;
      //   return <Redirect to="/account/register-school" />
      }
    };

    return (
      <div>
        <Layout schools={schools}>
          <Switch location={isModal ? this.previousLocation : location}>
            {/*<Route path="/account/index" exact component={Index} />*/}
            <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
            <Route path="/account/programs/:programId" component={Program} />
            <Route path="/account/create-program" component={SchoolCreateProgram} />
            <Route path="/account/register-school" component={RegistrationFlow} />
            <RedirectFork />
          </Switch>
        </Layout>
        {isModal ? <Route path="/account/create-program" component={CreateProgramModal} /> : null}
      </div>
    );
  }

}

export default Account;
