import { h, Component } from 'preact';

import Layout from 'layouts/account';


export default class AccountProgramEdit extends Component {
	render() {
		return (
      <Layout>
        <div>
				  <h1>AccountProgramEdit: {this.props.programId}</h1>
			  </div>
      </Layout>
		);
	}
}
