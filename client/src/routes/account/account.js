import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";
import { Redirect } from 'react-router';
import Bows from 'bows';
import { Container } from 'reactstrap';

import Layout from 'layouts/app';
import Program from './program';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import CreateProgramModal from './createProgramModal';
import RegistrationFlow from './registrationFlow';

import { BoxLoading } from 'components/loading';

import style from './style.scss';


const log = Bows('Account View');


class Account extends React.Component {

  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { userSchoolCodes } = this.props;
    if (userSchoolCodes.length) { // get it fresh every time account is opened
      log('Fetching schools: ', this.props.userSchoolCodes);
      this.props.fetchSchools(this.props.userSchoolCodes);
    }
    log('Fetching static.');
    this.props.fetchCmsData();
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
        log('Fork to render school');
        return <Redirect to={`/account/schools/${schools[0].code}/programs/${2018}`} />
      } else {
        log('Fork to register school');
        // return null;
        return <Redirect to="/account/add-school" />
      }
    };

    return (
      <Layout>
        <Container className={style.layoutContainer}>
          <Switch location={isModal ? this.previousLocation : location}>
            {/*<Route path="/account/index" exact component={Index} />*/}
            <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
            <Route path="/account/programs/:programId" component={Program} />
            <Route path="/account/create-program" component={SchoolCreateProgram} />
            <Route path="/account/add-school" component={RegistrationFlow} />
            <RedirectFork />
          </Switch>
        </Container>
        {isModal ? <Route path="/account/create-program" component={CreateProgramModal} /> : null}
      </Layout>
    );
  }

}

export default Account;
