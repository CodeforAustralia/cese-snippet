import { h, Component } from 'preact';

import Layout from 'layouts/account';


export default class AccountProgram extends Component {
	render() {
		return (
		  <Layout>
        <div>
          <h1>AccountProgram: {this.props.programId}</h1>
        </div>
      </Layout>
		);
	}
}
