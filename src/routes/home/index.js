import { h, Component } from 'preact';
import style from './style.scss';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Snippet</h1>
        <h2>Programs happening in schools now</h2>
        <p>For school staff to view or publish news about program applications in NSW schools.</p>
			</div>
		);
	}
}
