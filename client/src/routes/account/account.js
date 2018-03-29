import React from 'react';
import {
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import School from './school';
import SchoolPrograms from './schoolPrograms';
import SchoolCreateProgram from './schoolCreateProgram';
import Modal from './modal';

const RegisterFlow = () => <h1>Register flow</h1>;


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }
  componentDidMount() {
    const { userSchoolCodes } = this.props;
    if (userSchoolCodes && userSchoolCodes.length) {
      this.props.fetchSchools(userSchoolCodes);
    }
  }
  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { schools, isFetching, location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render;

    return (
      <div>
        <div style={{border: '1px solid red'}}>
          <ul>
            <li><NavLink to="/account/schools/76862">Jupiter School</NavLink></li>
            <li><NavLink to="/account/schools/76862/programs/2018">Jupiter School Programs 2018</NavLink></li>
            <li><NavLink to="/account/schools/76862/create-program">Create Program</NavLink></li>
            <li><NavLink to={{
              pathname: "/account/schools/76862/create-program",
              state: { modal: true }
            }}>Open Create Program modal</NavLink></li>
          </ul>

          { isFetching !== false ?
            <p>Loading...</p> :
            !schools.length ?
              <p>No schools</p> :
              <p>Programs: {schools.map((school, idx) => <span key={idx}>{school.name}</span>)}</p>
          }

          <Switch location={isModal ? this.previousLocation : location}>
            <Route path="/account/schools/:code" exact component={School} />
            <Route path="/account/schools/:code/programs/:year" component={SchoolPrograms} />
            <Route path="/account/schools/:code/create-program" component={SchoolCreateProgram} />
            <Route path="/account/register" component={RegisterFlow} />
          </Switch>
        </div>
        {isModal ? <Route path="/account/schools/:code/create-program" component={Modal} /> : null}
      </div>
    )
  }
}

export default Account;
