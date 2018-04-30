import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Badge,
} from "reactstrap";
import {
  NavLink as RRNavLink,
} from 'react-router-dom';
import cx from 'classnames';

import style from './layout.scss';

const Layout = ({containerClassName, children }) => (
  <div className={cx(containerClassName, style.layout)}>

    <Navbar color="transparent" className={style.navbar}>
      <NavbarBrand to="/" tag={RRNavLink} className={style.navbarBrand}>Snippet<Badge color="light" pill className={style.alphaBadge}>ALPHA</Badge></NavbarBrand>
    </Navbar>

    {children}

  </div>
);

export default Layout;
