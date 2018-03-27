import React from 'react';
import { Redirect } from 'react-router';
import {
  Route,
  Switch,
} from "react-router-dom";
import { Container } from 'reactstrap';
import bows from 'bows';

import LayoutAccount from 'layouts/account';
import FilteredSchoolPrograms from './filteredSchoolPrograms';
import AccountNav from './components/accountNav';
import Loading from 'components/loading';


const log = bows('Account');

class Account extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    }
  }

  componentDidMount() {
    this.fetchData().then(() => {
      this.setState(() => ({ isReady: true }));
    });
  }

  fetchData() {
    log('Fetching data');
    return this.props.fetchSchools(this.props.schoolCodes);
  }

  render() {
    const { isReady } = this.state;
    const {
      schools,
      defaultYear,
    } = this.props;

    return (
      <LayoutAccount>
        {
          (() => {
            if (!isReady) {
              return <Loading />
            }

            if (!schools.length) {
              return <p>User has no schools</p>
            }

            return (
              <div>
                <AccountNav schools={schools} defaultYear={defaultYear} />
                <Container>
                  <Switch>
                    <Route path="/account/schools/:code/programs/:year" component={FilteredSchoolPrograms} />
                    <Redirect exact from="/account" to={`/account/schools/${this.props.defaultCode}/programs/${this.props.defaultYear}`} />
                  </Switch>
                </Container>
              </div>
            )
          })()
        }
      </LayoutAccount>
    );
  }
}

export default Account;
