import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
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

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            {/*{schools && schools.length ?*/}
            {/*<NavItem className={style.navbarAddProgramBtn}>*/}
            {/*<form className="form-inline">*/}
            {/*<Button outline color="secondary" size="xs" className="mb-0 mr-2">*/}
            {/*<NavLink to={getCreateProgramModalUrl()}*/}
            {/*activeclassname="active"*/}
            {/*tag={RRLink}*/}
            {/*disabled={location.pathname === getCreateProgramUrl().pathname}*/}
            {/*>Add a New Program</NavLink>*/}
            {/*</Button>*/}
            {/*</form>*/}
            {/*</NavItem> :*/}
            {/*null*/}
            {/*}*/}

            <NavItem>
              {!isAuthenticated &&
              <NavLink to="/login" activeclassname="active" tag={RRNavLink}>Login</NavLink>
              }
            </NavItem>

            {isAuthenticated &&
            <UncontrolledDropdown nav inNavbar>

              <DropdownToggle nav caret>
                {session.first}
              </DropdownToggle>

              <DropdownMenu right>

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
        </Collapse>
      </Navbar>
    )
  }
}

export default Header;
