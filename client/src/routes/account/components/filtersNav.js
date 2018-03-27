import React from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { getSchoolProgramsUrl } from 'helpers/url';

const FiltersNav = ({filters}) => {
  return (
    <Nav tabs>
      {filters.map((filter, idx) => (
        <NavItem key={idx}>
          <NavLink tag={RRNavLink}
                   to={getSchoolProgramsUrl(filter.code, filter.year)}
                   activeClassName="active">{filter.year}</NavLink>
        </NavItem>
      ))}
    </Nav>
  )
};

export default FiltersNav;
