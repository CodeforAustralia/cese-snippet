import React from 'react';

class School extends React.Component {
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
      <div style={{border: '1px solid green'}}>
        <h1>School: {school.name}</h1>
      </div>
    );
  }
}

export default School;
