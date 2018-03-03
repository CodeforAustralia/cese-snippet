import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    {/*<li><Link to="/" activeClassName="active">Home</Link></li>*/}
    {/*<li><Link to="/login" activeClassName="active">Login</Link></li>*/}
    <li><Link to="/logout" activeclassname="active">Logout</Link></li>
    <li><Link to="/account/programs">Account Programs</Link></li>
    <li><Link to="/account/programs/442" activeclassname="active">Account Program</Link></li>
    <li><Link to="/account/new-program" activeclassname="active">New Program</Link></li>
    <li><Link to="/account/programs/785/edit" activeclassname="active">Account Program - Edit</Link></li>
  </ul>
);

export default Nav;
