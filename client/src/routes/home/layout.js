import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Badge,
} from "reactstrap";
import cx from 'classnames';

import style from './layout.scss';

const Layout = ({containerClassName, children}) => (
  <div className={cx(containerClassName, style.layout)}>

    <Navbar color="transparent" className={style.navbar}>
      <NavbarBrand to="/" className={style.navbarBrand}>Snippet<Badge color="light" pill className={style.alphaBadge}>ALPHA</Badge></NavbarBrand>
    </Navbar>

    {children}

  </div>
);

export default Layout;
