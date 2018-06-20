import React from 'react';
import { withRouter } from 'react-router';

const win = typeof window !== 'undefined' ? window : global;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    win.scrollTo(0, 0);
  }

  render() {
    return null
  }
}

export default withRouter(ScrollToTopOnMount);
