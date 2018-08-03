import React from 'react';
import Bows from 'bows';
import { Redirect } from 'react-router';

import { getOnboardingSchoolUrl } from 'helpers/url';
import { hasSchool } from 'store/schools/helpers';
import { PageLoading } from 'components/loading';


const log = Bows('View');

class SchoolPrograms extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.filterProps) !== JSON.stringify(this.props.filterProps)) {
      this.fetchData();
    }
  }
  fetchData() {
    const {
      school,
      isFetchingSchools,
      fetchSchool,
      fetchProgramsByFilter,
      filterProps,
    } = this.props;
    if (!isFetchingSchools && !hasSchool(school)) {
      log('fetching school');
      return fetchSchool();
    }
    log(`fetching programs with filters: ${filterProps}`);
    fetchProgramsByFilter();
  }
  render() {
    const {
      school,
      isFetchingSchools,
    } = this.props;

    return <PageLoading />

    if (isFetchingSchools !== false) {
      return <PageLoading />
    }

    if (!school) {
      return <Redirect to={getOnboardingSchoolUrl()} />;
    }

    return (
      <div>School Programs</div>
    )
  }
}

export default SchoolPrograms;
