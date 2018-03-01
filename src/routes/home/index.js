import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';

import Layout from 'layouts/home';


export default class Home extends Component {
	render() {
		return (
      <Layout>
        <div class={style.home}>
          <h1>Snippet</h1>
          <h2>Programs happening in schools now</h2>
          <p>For school staff to view or publish news about program applications in NSW schools.</p>
          <Link href="/login">Log in</Link>
        </div>
      </Layout>
		);
	}
}
