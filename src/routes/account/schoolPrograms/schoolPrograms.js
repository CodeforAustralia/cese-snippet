import React from 'react';
import isEmpty from 'lodash/isEmpty';

class SchoolPrograms extends React.Component {
  componentDidMount() {
    if (!this.props.school) {
      this.props.fetchSchool(this.props.schoolCode);
    }
    this.props.fetchAppliedPrograms(this.props.schoolCode);
  }
  render() {

    if (isEmpty(this.props.school)) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <h1>SchoolPrograms</h1>
        <code>School: {JSON.stringify(this.props.school)}</code>
        {/*{this.props.appliedPrograms.length ?*/}
          // <code>Programs: {JSON.stringify(this.props.appliedPrograms)}</code> :
          // <p>No programs</p>
        // }
      </div>
    )
  }
}

export default SchoolPrograms;
