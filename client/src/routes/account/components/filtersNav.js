import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSchoolProgramsUrl } from 'helpers/url';

const FiltersNav = ({filters}) => {
  return (
    <div>
      Filters:
      <ul>
        {filters.map((filter, idx) => (
          <li key={idx}>
            <NavLink activeClassName="active"
                   activeStyle={{fontWeight: 'bold'}}
                   to={getSchoolProgramsUrl(filter.code, filter.year)}>{filter.code} {filter.year}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default FiltersNav;
