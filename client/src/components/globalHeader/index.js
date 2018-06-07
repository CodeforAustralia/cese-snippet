import { withRouter } from 'react-router-dom';

import withAuth from 'components/auth/withAuth';

import AuthContainer from './authContainer';
import Header from './globalHeaderAuth';
import HeaderAuth from './globalHeaderAuth';

const GlobalHeader = Header;
const GlobalHeaderAuth = withRouter(withAuth(AuthContainer(HeaderAuth)));

export {
  GlobalHeader,
  GlobalHeaderAuth,
};
