import React from 'react';
import {
  Container,
} from 'reactstrap';
import {
  withRouter,
} from 'react-router-dom';

import Nav from './../components/accountNav';

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
    const { children } = this.props;
    return (
      <div>
        <Nav />
        <Container>
          {children}
        </Container>
      </div>
    );
  }
}

export default withRouter(withAuth(LayoutAccount));
