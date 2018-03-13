import React from 'react';
import isEmpty from 'lodash/isEmpty';


class SchoolPrograms extends React.Component {

  fetchData() {
    this.props.fetchSchool(this.props.schoolCode).then(() => {
      this.props.fetchProgramsByFilters(this.props.schoolCode, this.props.yearSelected);
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.schoolCode !== this.props.schoolCode) {
      this.fetchData();
    }
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
          this.props.programs && this.props.programs.length >= 1 ?
            <code>Programs: {JSON.stringify(this.props.programs)}</code> :
            <p>Loading Programs....</p>
        }

      </div>
    )
  }
}

export default SchoolPrograms;
