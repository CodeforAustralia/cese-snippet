import React from 'react';
import { NavLink } from "react-router-dom";

import { getSchoolProgramsUrl } from 'helpers/url';

const AccountNav = ({schools, defaultYear}) => {
  return (
    <ul>
      {schools.map((school, idx) => (
        <li><NavLink to={getSchoolProgramsUrl(school.code, defaultYear)} activeClassName="active">{school.name}</NavLink></li>
      ))}
    </ul>
  )
};

export default AccountNav;
