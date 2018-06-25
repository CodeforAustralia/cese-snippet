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
import CreateProgram from './createProgram';
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
    log('Fetching cms.');
    this.props.fetchCmsData();
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
      sessionUser,
      userSchools,
      isFetchingUserSchools,
    } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    if (!isModal && isFetchingUserSchools !== false) {
      return <BoxLoading />
    }

    const RedirectFork = () => {
      if (userSchools.length) {
        log('Fork to render school');
        return <Redirect to={`/account/schools/${userSchools[0].code}/programs/${2018}`} />
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
            <Route path="/account/create-program" component={CreateProgram} />
            <Route path="/account/add-school" component={RegistrationFlow} />
            <RedirectFork />
          </Switch>
        </Container>
        {isModal ? <Route path="/account/create-program" render={(props) => <CreateProgramModal {...props} sessionUser={sessionUser} />} /> : null}
      </Layout>
    );
  }

}

export default Account;
