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
import Avatar from 'components/avatar';

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
      // session,
      sessionUser,
    } = this.props;

    return (
      <Navbar color="concrete" expand="md" className={style.header}>
        <Container>
          <NavbarBrand to="/" tag={RRNavLink} className={style.title}>Snippet</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              {!isAuthenticated &&
                <NavLink to="/" tag={RRNavLink} className={style.menuLink}>Login</NavLink>
              }
            </NavItem>

            {isAuthenticated &&
              <UncontrolledDropdown nav inNavbar>

                <DropdownToggle nav className={`${style.menuLink} ${style.menuLinkAvatar}`}>
                  <Avatar first={sessionUser.firstName} last={sessionUser.lastName} className={style.avatar} />
                  <span className={style.caret} />
                </DropdownToggle>

                <DropdownMenu right className={style.dropdownMenu}>

                  <DropdownItem header>
                    <span className={style.menuItemUsername}>{sessionUser.firstName} {sessionUser.lastName}</span>
                    <span className={style.menuItemUsernameLabel}>Your Account</span>
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem className={style.menuItemLink} disabled>
                    Edit Profile
                  </DropdownItem>

                  <DropdownItem className={style.menuItemLink} disabled>
                    Update Notification Preferences
                  </DropdownItem>

                  <DropdownItem className={style.menuItemLink} tag={RRNavLink} to={this.registerSchoolUrl}>
                    Change school
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem className={style.menuItemLink} tag="a" href="https://www.yammer.com/det.nsw.edu.au/#/threads/inGroup?type=in_group&feedId=13755246&view=all" target="_blank" rel="noopener noreferrer" alt="Happy Data Group on NSW DET Yammer">
                    Community
                  </DropdownItem>

                  <DropdownItem className={style.menuItemLink} disabled>
                    Invite Others
                  </DropdownItem>

                  <DropdownItem divider />

                  <DropdownItem className={style.menuItemLink} onClick={handleSignOut}>
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
