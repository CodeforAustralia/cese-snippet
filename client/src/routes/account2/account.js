import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import School from './school';

const SchoolPrograms = () => <h1>School programs 2018</h1>;
const CreateProgram = () => <h1>Create program</h1>;
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
          <li><NavLink to="/account/create-program">Create Program</NavLink></li>
        </ul>

        { isFetching === false && !schools.length ?
          <p>No schools</p> :
          <p>Schools: {schools.map((s, idx) => <span key={idx}>{s.name}</span>)}</p>
        }

        <Switch>
          <Route path="/account/schools/:code" exact component={School} />
          <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
          <Route path="/account/schools/:code/create-program" component={CreateProgram} />
          <Route path="/account/register" component={RegisterFlow} />
        </Switch>
        {isModal ? <Route path="/account/schools/:code/create-program" component={CreateProgram} /> : null}
      </div>
    )
  }
}

export default Account;
