import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { getRegisterSchoolUrl } from 'helpers/url';

import style from './style.scss';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.registerSchoolUrl = getRegisterSchoolUrl(true);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      isAuthenticated,
      handleSignOut,
      session,
    } = this.props;

    return (
      <Navbar color="concrete" light expand="md" className={style.navbar}>
        <NavbarBrand to="/account" tag={RRNavLink}>Snippet</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {!isAuthenticated &&
              <NavLink to="/login" tag={RRNavLink}>Login</NavLink>
            }
          </NavItem>

          {isAuthenticated &&
            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                {session.first}
              </DropdownToggle>

              <DropdownMenu right className={style.dropdownMenu}>

                <DropdownItem tag={RRNavLink} to={this.registerSchoolUrl}>
                  Add another school
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem onClick={handleSignOut}>
                  Sign out
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          }
        </Nav>
      </Navbar>
    )
  }
}

export default Header;
