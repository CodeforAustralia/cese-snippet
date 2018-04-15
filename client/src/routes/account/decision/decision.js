import React from 'react';
import { withRouter } from 'react-router';

class Schools extends React.Component {
  componentDidMount() {
    const { schools } = this.props;

    if (typeof schools === 'undefined' || !schools.length) {
      this.props.fetchSchools();
    }

  }
  componentDidUpdate() {
    const {
      schools,
      isFetching,
      history,
    } = this.props;

    console.log('isFetching', isFetching);
    console.log('schools', schools);

    if (isFetching === false && typeof schools !== 'undefined') {
      if (!schools.length) {
        history.push('/account/register');
      } else {
        history.push(`/account/schools/${schools[0].code}/programs/2018`);
      }
    }
  }
  render() {
    const { isFetching } = this.props;

    console.log('isFetching', isFetching);

    if (isFetching !== false) {
      return <p style={{border:'1px solid red'}}>Loading...</p>
    }

    return null;
  }
}

export default withRouter(Schools);
