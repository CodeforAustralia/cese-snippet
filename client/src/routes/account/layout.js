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
  DropdownItem } from 'reactstrap';
import {
  withRouter,
  NavLink as RRNavLink
} from 'react-router-dom';
import {
  getSchoolProgramsUrl,
  getCreateProgramModalUrl,
  getCreateProgramUrl,
} from 'helpers/url';

import withAuth from 'components/auth/withAuth';


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
    const { isAuthenticated, signout, history, session } = this.props;
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand to="/account" tag={RRNavLink}>Snippet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!isAuthenticated &&
                <NavLink to="/login" activeClassName="active" tag={RRNavLink}>Login</NavLink>
                }
              </NavItem>
              <NavItem>
                <NavLink to={getCreateProgramUrl()} activeClassName="active" tag={RRNavLink}>Create Program</NavLink>
              </NavItem>
              {isAuthenticated &&
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {session.first}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/account/schools/76862" activeClassName="active" tag={RRNavLink}>Croppa Creek Public School Programs 2018</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to={getSchoolProgramsUrl("3717", "2018")} activeClassName="active" tag={RRNavLink}>Croppa Creek Public School</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to={getCreateProgramModalUrl({code: "3717", year: "2018"})} activeClassName="active" tag={RRNavLink}>Create Modal</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to={getCreateProgramModalUrl({code: "3717", year: "2018", id: "1"})} activeClassName="active" tag={RRNavLink}>Update Modal</NavLink>
                  </DropdownItem>


                  <DropdownItem divider />

                  <DropdownItem onClick={() => {
                    signout(() => history.push("/"));
                  }}>Sign out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              }
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(withAuth(LayoutBasic));
