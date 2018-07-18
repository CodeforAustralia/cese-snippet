import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Container,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

import style from './style.scss';


const GlobalHeader = () => (
  <Navbar color="concrete" expand="md" className={style.header}>
    <Container>
      <NavbarBrand to="/" tag={RRNavLink} className={style.title}>Snippet</NavbarBrand>
    </Container>
  </Navbar>
);

export default GlobalHeader;
