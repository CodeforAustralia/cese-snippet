import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch,
} from "react-router-dom";
import { Container } from 'reactstrap';

import LayoutAccount from 'layouts/account';
import FilteredSchoolPrograms from './filteredSchoolPrograms';
import AccountNav from './components/accountNav';
import Loading from 'components/loading';


class Account extends React.Component {

  componentDidMount() {
    this.props.fetchSchools(this.props.schoolCodes);
  }

  render() {
    const { schools, defaultYear } = this.props;

    if (!schools.length) {
      return <Loading />
    }

    return (
      <LayoutAccount>
        <AccountNav schools={schools} defaultYear={defaultYear} />
        <Container>
          <Switch>
            <Route path="/account/schools/:code/programs/:year" component={FilteredSchoolPrograms} />
            <Redirect exact from="/account" to={`/account/schools/${this.props.defaultCode}/programs/${this.props.defaultYear}`} />
          </Switch>
        </Container>
      </LayoutAccount>
    );
  }
}

export default Account;
