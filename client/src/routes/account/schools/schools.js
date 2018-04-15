import React from 'react';
import { Redirect } from 'react-router';
import Bows from 'bows';

const log = Bows('Schools');


class Schools extends React.Component {

  componentDidMount() {
    const { schools } = this.props;
    if (!schools || !schools.length) {
      this.props.fetchSchools(this.props.userSchoolCodes);
    }
  }

  render() {
    const { isFetching, schools } = this.props;

    if (isFetching !== false) {
      return <p style={{border: '1px solid green'}}>Loading...</p>;
    }

    if (isFetching === false) {  // it's ready
      if (schools && schools.length) {
        log('Navigating to SchoolPrograms');
        return <Redirect to={`/account/schools/${schools[0].code}/programs/2018`} />
      } else {
        log('Navigating to Register');
        return <Redirect to={`/account/register`} />
      }
    }

    return null;
  }
}

export default Schools;
