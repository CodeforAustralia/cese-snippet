import { withRouter } from 'react-router-dom';

import Container from './container';
import Component from './app';

export default withRouter(Container(Component));
