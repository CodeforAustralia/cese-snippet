import { withRouter } from 'react-router';
import Form from './form';
import CreateContainer from './createContainer';
import UpdateContainer from './updateContainer';

export const CreateForm = withRouter(CreateContainer(Form));
export const UpdateForm = withRouter(UpdateContainer(Form));
