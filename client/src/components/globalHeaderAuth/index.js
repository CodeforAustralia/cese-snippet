import { withRouter } from 'react-router-dom';

import withAuth from 'components/auth/withAuth';

import Container from './container';
import Header from './globalHeaderAuth';

export default withRouter(withAuth(Container(Header)));
