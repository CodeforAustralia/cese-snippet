import React from 'react';
import isEmpty from 'lodash/isEmpty';

class SchoolPrograms extends React.Component {
  componentDidMount() {
    this.props.fetchSchool(this.props.schoolCode).then(() => {
      this.props.fetchAppliedProgramsBySchool(this.props.schoolCode);
    });
  }
  render() {

    if (isEmpty(this.props.school)) {
      return <p>Loading School...</p>
    }

    return (
      <div>
        <h1>SchoolPrograms</h1>
        <code>School: {JSON.stringify(this.props.school)}</code>
        <hr/>
        {
          this.props.appliedPrograms && this.props.appliedPrograms.length >= 1 ?
            <code>Applied programs: {JSON.stringify(this.props.appliedPrograms)}</code> :
            <p>Loading Applied Programs....</p>
        }
      </div>
    )
  }
}

export default SchoolPrograms;
