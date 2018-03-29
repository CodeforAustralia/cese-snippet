import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import School from './school';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';

const RegisterFlow = () => <h1>Register flow</h1>;


class Account extends React.Component {
  componentDidMount() {
    const { userSchoolCodes } = this.props;
    if (userSchoolCodes && userSchoolCodes.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }
  render() {
    const { schools, isFetching } = this.props;
    const isModal = false;

    console.log('isFetching', isFetching);
    console.log('schools', schools);

    return (
      <div style={{border: '1px solid red'}}>
        <ul>
          <li><NavLink to="/account/schools/76862">Jupiter School</NavLink></li>
          <li><NavLink to="/account/schools/76862/programs/2018">Jupiter School Programs 2018</NavLink></li>
          <li><NavLink to="/account/schools/76862/create-program">Create Program</NavLink></li>
        </ul>

        { isFetching !== false ?
          <p>Loading...</p> :
          !schools.length ?
            <p>No schools</p> :
            <p>Programs: {schools.map((school, idx) => <span key={idx}>{school.name}</span>)}</p>
        }

        <Switch>
          <Route path="/account/schools/:code" exact component={School} />
          <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
          <Route path="/account/schools/:code/create-program" component={SchoolCreateProgram} />
          <Route path="/account/register" component={RegisterFlow} />
        </Switch>
        {isModal ? <Route path="/account/schools/:code/create-program" component={SchoolCreateProgram} /> : null}
      </div>
    )
  }
}

export default Account;
