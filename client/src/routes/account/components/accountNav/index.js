import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import {
  getSchoolProgramsUrl,
  getCreateProgramUrl,
} from 'helpers/url';


const AccountNav = ({schools, defaultYear}) => {
  return (
    <Nav>
      {schools.map((school, idx) => (
        <NavItem key={idx}>
          <NavLink tag={RRNavLink}
                   to={getSchoolProgramsUrl(school.code, defaultYear)}
                   activeClassName="active">{school.name}</NavLink>
        </NavItem>
      ))}
      <NavItem>
        <NavLink tag={RRNavLink}
                 to={getCreateProgramUrl()}
                 activeClassName="active">Add Program</NavLink>
      </NavItem>
    </Nav>
  )
};

export default AccountNav;
