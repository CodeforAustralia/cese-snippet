import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import style from './style.scss';

const TopBanner = () => (
  <div>
    <Navbar color="dark" dark expand="md" className={style.navBar}>
      <NavbarBrand className={style.navbarBrand}>NSW DEPARTMENT OF EDUCATION</NavbarBrand>
    </Navbar>
  </div>
);

export default TopBanner;
