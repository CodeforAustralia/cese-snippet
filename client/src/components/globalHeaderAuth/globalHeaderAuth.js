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
  Container,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { getRegisterSchoolUrl } from 'helpers/url';

import style from './style.scss';


class GlobalHeaderAuth extends React.Component {

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
      <Navbar color="concrete" expand="md" className={style.globalHeader}>
        <Container>
        <NavbarBrand to="/account" tag={RRNavLink} className={style.globalHeaderTitle}>Snippet</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            {!isAuthenticated &&
              <NavLink to="/login" tag={RRNavLink} className={style.globalHeaderMenuLink}>Login</NavLink>
            }
          </NavItem>

          {isAuthenticated &&
            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret className={style.globalHeaderMenuLink}>
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
        </Container>
      </Navbar>
    );
  }
}

export default GlobalHeaderAuth;
