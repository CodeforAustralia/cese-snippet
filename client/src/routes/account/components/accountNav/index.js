import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { getSchoolProgramsUrl } from 'helpers/url';

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
    </Nav>
  )
};

export default AccountNav;
