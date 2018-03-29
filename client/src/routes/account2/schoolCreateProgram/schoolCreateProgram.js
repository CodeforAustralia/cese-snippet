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

    return (
      <div style={{border: '1px solid yellow'}}>
        <h1>SchoolCreateProgram</h1>
        { isFetching === false && !school ?
          <p>No school</p> :
          <h1>School: {school.name}</h1>
        }
      </div>
    );
  }
}

export default SchoolCreateProgram;
