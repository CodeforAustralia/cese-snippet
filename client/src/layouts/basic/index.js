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
          <NavbarBrand to="/" tag={RRNavLink}>Snippet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!isAuthenticated &&
                <NavLink to="/login" activeClassName="active" tag={RRNavLink}>Login</NavLink>
                }
              </NavItem>
              {isAuthenticated &&
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {session.first}
                </DropdownToggle>
                <DropdownMenu right>
                  {/*<DropdownItem>*/}
                  {/*Option 1*/}
                  {/*</DropdownItem>*/}
                  {/*<DropdownItem>*/}
                  {/*Option 2*/}
                  {/*</DropdownItem>*/}
                  {/*<DropdownItem divider />*/}
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
