import React from 'react';

class SchoolCreateProgram extends React.Component {
  componentDidMount() {
    const { school } = this.props;
    if (!school) {
      this.props.fetchSchool();
    }
  }
  render() {
    const { school, isFetching } = this.props;

    if (isFetching !== false) {
      return <p>Loading...</p>;
    }

    if (!school) {
      return <p>No school</p>;
    }

    return (
      <div style={{border: '1px solid yellow'}}>
        <h1>SchoolCreateProgram</h1>

        <p>School: {school.name}</p>

        <p>Form goes here</p>

      </div>
    );
  }
}

export default SchoolCreateProgram;
