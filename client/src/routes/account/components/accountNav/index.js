import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';
import {
  NavLink,
} from "react-router-dom";

import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl,
  getCreateProgramUrl,
} from 'helpers/url';


const AccountNav = () => {
  return (
    <Navbar color="light" light expand="md">
      <ul>
        <li><NavLink to="/account/schools/76862">Jupiter School</NavLink></li>
        <li><NavLink to={getSchoolProgramsUrl("76862", "2018")}>Jupiter School Programs 2018</NavLink></li>
        <li><NavLink to={getCreateProgramUrl()}>Create Program</NavLink></li>
        <li><NavLink to={getCreateProgramModalUrl({code: "76862", year: "2018"})}>Open Create Program modal</NavLink></li>
        <li><NavLink to={getCreateProgramModalUrl({code: "76862", year: "2018", id: "2"})}>Open Update Program modal</NavLink></li>
      </ul>

      <Container>
        <NavbarBrand href="/">Account</NavbarBrand>
      </Container>
    </Navbar>
  )
};

export default AccountNav;
