import React from 'react';
import { Link } from 'react-router-dom';

import Loading from 'components/loading';


class Program extends React.Component {

  componentDidMount() {
    const { program } = this.props;
    if (!program) {
      this.props.fetchProgram();
    }
  }

  render() {
    const { isFetching, program } = this.props;

    if (isFetching !== false) {
      return <Loading />
    }

    return (
      <div>
        <p><Link to="/account">{`< Programs`}</Link></p>
        <h1>School program {program.id}</h1>
        <code>{JSON.stringify(program)}</code>
      </div>
    )
  }

}

export default Program;
