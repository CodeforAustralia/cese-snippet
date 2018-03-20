import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSchoolProgramsUrl } from 'helpers/url';

const FiltersNav = ({filters}) => {
  return (
    <div>
      Filters:
      {filters.map((filter, idx) => (
        <NavLink key={idx}
              activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}
              to={getSchoolProgramsUrl(filter.code, filter.year)}>{filter.code} {filter.year}</NavLink>
      ))}

      <NavLink to={getSchoolProgramsUrl("76862", 2017)}>76862 2017</NavLink>
      <br/>
      <NavLink to={getSchoolProgramsUrl("76862", 2018)}>76862 2018</NavLink>
      <br/>
    </div>
  )
};

export default FiltersNav;
