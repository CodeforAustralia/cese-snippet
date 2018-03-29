import { withRouter } from 'react-router';
import Form from './form';
import CreateContainer from './createContainer';

export const CreateForm = withRouter(CreateContainer(Form));
