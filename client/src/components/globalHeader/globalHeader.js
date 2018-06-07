import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import style from './style.scss';


const GlobalHeader = () => (
  <Navbar color="concrete" expand="md" className={style.globalHeader}>
    <Container>
      <NavbarBrand to="/account" tag={RRNavLink} className={style.globalHeaderTitle}>Snippet</NavbarBrand>
    </Container>
  </Navbar>
);

export default GlobalHeader;
