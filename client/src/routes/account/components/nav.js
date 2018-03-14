import React from 'react';
import { Link } from 'react-router-dom';
import { getSchoolProgramsUrl } from 'helpers/url';

const Nav = () => {
  return (
    <div>
      Nav:
      <Link to={getSchoolProgramsUrl(21312)}>21312 Year</Link>
      <Link to={getSchoolProgramsUrl(76862)}>76862 Year</Link>
    </div>
  )
};

export default Nav;
