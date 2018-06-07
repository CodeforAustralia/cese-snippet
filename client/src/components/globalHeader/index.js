import { withRouter } from 'react-router-dom';

import withAuth from 'components/auth/withAuth';

import Container from './container';
import Header from './globalHeaderAuth';
import HeaderAuth from './globalHeaderAuth';

const GlobalHeader = Header;
const GlobalHeaderAuth = withRouter(withAuth(Container(HeaderAuth)));

export {
  GlobalHeader,
  GlobalHeaderAuth,
};
