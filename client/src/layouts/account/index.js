import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {
  withRouter,
  NavLink as RRNavLink
} from 'react-router-dom';

import withAuth from 'components/auth/withAuth';


class LayoutAccount extends React.Component {
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
    const { signout, history, session } = this.props;
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand to="/" tag={RRNavLink}>Snippet</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {session.first}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/account/create-program" activeClassName="active" tag={RRNavLink}>Create Program</NavLink>
                  </DropdownItem>
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
            </Nav>
          </Collapse>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default withRouter(withAuth(LayoutAccount));
