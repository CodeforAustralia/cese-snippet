import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {
  withRouter,
  NavLink as RRNavLink,
  Link as RRLink,
} from 'react-router-dom';

import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl,
  getCreateProgramUrl,
} from 'helpers/url';
import withAuth from 'components/auth/withAuth';
import style from './style.scss';


class LayoutBasic extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
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
    const { isAuthenticated, signout, history, session, location } = this.props;

    const schools = []; // todo

    return (
      <div>
        <Navbar color="faded" light expand="md" className={style.navbar}>
          <NavbarBrand to="/account" tag={RRNavLink}>Snippet</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {schools && schools.length ?
                <NavItem className={style.navbarAddProgramBtn}>
                  <form className="form-inline">
                    <Button outline color="secondary" size="xs" className="mb-0 mr-2">
                      <NavLink to={getCreateProgramModalUrl()}
                               activeclassname="active"
                               tag={RRLink}
                               disabled={location.pathname === getCreateProgramUrl().pathname}
                      >Add a New Program</NavLink>
                    </Button>
                  </form>
                </NavItem> :
                null
              }

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

                  {schools.map((school, idx) => (
                    <DropdownItem key={idx}>
                      <NavLink to={`/account/schools/${school.code}`} activeclassname="active" tag={RRNavLink}>{school.name}</NavLink>
                    </DropdownItem>
                  ))}

                  <DropdownItem divider />

                  <DropdownItem onClick={() => {
                    signout(() => history.push("/"));
                  }}>
                    Sign out
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>

        <Container className={style.layoutContainer}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(withAuth(LayoutBasic));
