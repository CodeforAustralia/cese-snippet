import { h } from 'preact';
import { Link } from 'preact-router';

const Nav = () => (
  <ul>
    <li><Link href="/" activeClassName="active">Home</Link></li>
    <li><Link href="/login" activeClassName="active">Login</Link></li>
    <li><Link href="/logout" activeClassName="active">Logout</Link></li>
    <li><Link href="/account/programs">Account Programs</Link></li>
    <li><Link href="/account/programs/442" activeClassName="active">Account Program</Link></li>
    <li><Link href="/account/programs/new" activeClassName="active">New Program</Link></li>
    <li><Link href="/account/programs/785/edit" activeClassName="active">Account Program - Edit</Link></li>
  </ul>
);

export default Nav;
