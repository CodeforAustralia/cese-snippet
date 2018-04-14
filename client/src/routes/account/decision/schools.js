import React from 'react';
import { withRouter } from 'react-router';

class Schools extends React.Component {
  componentDidMount() {
    this.props.fetchSchools();
  }
  render() {
    const {
      schools,
      isFetching,
      history,
    } = this.props;

    console.log('isFetching', isFetching);

    if (isFetching !== false) {
      return <p style={{border:'1px solid red'}}>Loading...</p>
    }

    if (!schools.length) {
      debugger
      history.push('/account/register');
    } else {
      debugger
      history.push(`/account/schools/${schools[0].code}/programs/2018`);
    }

    return null;
  }
}

export default withRouter(Schools);
