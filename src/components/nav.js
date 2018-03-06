import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul>
      <li><Link to="/login" activeclassname="active">Logout</Link></li>
      <li><Link to="/login" activeclassname="active">Login</Link></li>
      <li><Link to="/account" activeclassname="active">Account</Link></li>
    </ul>
  </div>
);

export default Nav;
